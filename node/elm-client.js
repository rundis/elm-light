var path = require("path");
var fs = require("fs");
var net = require("net");
var psTree = require("ps-tree");
var cp = require("child_process");
var wrench = require("wrench");
var os = require("os");
var chokidar = require("chokidar")
var walker = require('fs-walk');
var elmParser = require("./elmparser")


process.setMaxListeners(100);


var elmGlobals = {
  repl: null,
  reactor: null,
  watcher: null
};


/* Some polyfills */
if (!String.prototype.endsWith) {
  String.prototype.endsWith = function(searchString, position) {
      var subjectString = this.toString();
      if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
        position = subjectString.length;
      }
      position -= searchString.length;
      var lastIndex = subjectString.lastIndexOf(searchString, position);
      return lastIndex !== -1 && lastIndex === position;
  };
}



/* ----------- START CLIENT / BOOTSTRAP --------- */


// Not much useful can be done without packages, might as well try to insall by default
// If already installed the overhead is neglible
// Also elm-repl will delete elm-stuff on exit if not created before it's started !
doPackageInstall();




// Start parsing as early as possible
startWatcher();
parseSourceFiles();
parseAllPackageSources();

startRepl(
  function (err) {
    console.error(err);
    handleClose();
  },
  function (out) {
    elmGlobals.repl.stdout.removeAllListeners("data");
    elmGlobals.repl.stderr.removeAllListeners("data");
    startReactor(
      function (err) {
        console.error (err);
        handleClose();
      },
      function (out) {
        elmGlobals.reactor.stderr.removeAllListeners("data");
        elmGlobals.reactor.stdout.removeAllListeners("data");
        startMessageListener();

      },
      process.cwd(),
      parseInt(process.argv[2])
    );
  },
  process.cwd()
);


function doPackageInstall() {
  try {
    cp.execSync("elm-package install --yes", {cwd: process.cwd()});
  } catch (e) {
    console.error("Error running package install" + e);
  }
}



function startRepl(error, success, projectPath) {
  elmGlobals.repl = cp.spawn("elm-repl", ["--interpreter", process.execPath ], {cwd: projectPath});

  var outBuffer = "";
  elmGlobals.repl.stdout.on("data", function(out) {
    outBuffer += out;
    if(outBuffer.indexOf(":help") > -1) {
      success(outBuffer);
    }
  });
  elmGlobals.repl.stderr.on("data", function(err) {
    error(err.toString());
  });

  elmGlobals.repl.on("error", function(err) {
    console.log("error starting repl");
    console.log(err);
  });

}

function startReactor(error, success, projectPath, port) {
  elmGlobals.reactor = cp.spawn("elm-reactor", ["--port=" + port], {cwd: projectPath});

  var errBuff = "";
  elmGlobals.reactor.stdout.on("data", function(out) {
    console.log("Reactor out: " + out);
  });
  elmGlobals.reactor.stderr.on("data", function(err) {
    errBuff += err;
    if(errBuff.indexOf("Listening") > -1) {
      success(errBuff);
    }
    if(errBuff.indexOf("Error on startup") > -1) {
      error(errBuff);
    }
  });
  elmGlobals.reactor.on("error", function(err) {
    console.error("Reactor err event: " + err);
  });
}



function startMessageListener() {
  send([1, "elm.client.connected", []]); // notify lt we`re ready to receive messages

  process.on("message", function (msg) {
    var cb   = msg.cb;
    var cmd  = msg.command;
    var data = msg.data;

    try {
      switch (cmd) {
        case "client.close":
          handleClose();
          break;
        case "editor.elm.ast.passthrough":
          handleAstPassThrough(cb, data);
          break;
        case "elm.reload.ast":
          handleReloadAst(cb);
          break;
        case "editor.elm.ast.parsetext":
          handleParseEditorText(cb, data);
          break;
        case "editor.elm.lint":
          handleLint(cb, data);
          break;
        case "editor.elm.make":
          handleMake(cb, data);
          break;
        case "editor.elm.gendoc":
          handleGendoc(cb, data);
          break;
        case "editor.eval.elm":
          handleEval(cb, data);
          break;
        case "elm.repl.restart":
          handleReplRestart(cb);
          break;
        case "docs.elm.search":
          handleDocsSearch(cb, data);
          break;
        case "elm.test":
          handleTest(cb, data);
          break;


      }
    } catch (ex) {
      console.error("Error in elm client message listener for command: " + cmd);
      console.error(ex);
      handleClose();
    }
  });
}


function startWatcher() {
  var watcher = chokidar.watch(['elm-package.json',
                                'elm-stuff/exact-dependencies.json',
                                '**/*.elm'], {
    cwd: process.cwd(),
    persistent: true,
    ignoreInitial: false,
    //ignored: ['elm-stuff/**'], // need to find a robust way to handle these !
    followSymlinks: false,
    atomic: false
  });


  /* concers to handle
  - Package deleted -> Just report a delete event (on .elm files)  and let client deal with it.
  - Package added -> Only listen for moved directory under elm-stuff, parse package.json and only parse src directories for that package
  - if not under elm-stuff, check if source file (remember to use latest elm-package.json)
  - if source file and event moved, need to stat if file is present or not to decide if add or remove !
  - On directory move stat if exists to notify of directory delete or directory add (on add parse all elm files... not very efficient though)
  */

  watcher.on("raw", function(event, file, details) {
    var relFile = file ? path.relative(process.cwd(), file) : null;
    var sourceDirs = getSourceDirs(process.cwd());


    // chokidar or whatever it's using underneath seems to get this wrong.
    if (file && event === "modified" && !fileExists(file)) {
      return;  // phony change event when
    }


    if(relFile === "elm-stuff/exact-dependencies.json") {
      if ( event === "modified") {
        parseAllPackageSources();
      }
      if (event === "deleted" && !fileExists(file)) {
        sendAstMsg({
          type: "packagesDeleted"
        });
      }
    }


    if (file && isSourceFile(sourceDirs, file) && event === "modified") {
      parseAndSend(file);
    }

    if (file && isSourceFile(sourceDirs, file) && event === "deleted") {
      sendAstMsg({
        file: file,
        type: "deleted"
      });
    }

    if (file && isSourceFile(sourceDirs, file)
        && event === "moved") {
      if(fileExists(file)) {
        parseAndSend(file);
      } else {
        sendAstMsg({
          file: file,
          type: "deleted"
        });
      }
    }
  });


  elmGlobals.watcher = watcher;

}

function parseSourceFiles() {
  var sourceDirs = getSourceDirs(process.cwd());

  sourceDirs.forEach(function (d) {
    walker.files(path.join(process.cwd(), d), function (basedir, filename, stat, next) {
      if (path.extname(filename) === ".elm" &&
         !(basedir.startsWith(path.join(process.cwd(), "elm-stuff") ))) {
        parseAndSend(path.join(basedir, filename));
      }
      next();
    });
  });
}

function parseAllPackageSources() {
  var deps = getProjectDeps(process.cwd());
  deps.forEach(function (dep) {
    var packageDir = path.join(process.cwd(), "elm-stuff/packages", dep.name, dep.version);
    parsePackageSources({
      packageDir: packageDir,
      name: dep.name,
      version: dep.version
    });
  });
}

function parsePackageSources(package) {
  var sourceDirs = getSourceDirs(package.packageDir);

  sourceDirs.forEach(function (d) {
    walker.files(path.join(package.packageDir, d), function (basedir, filename, stat, next) {
      if (path.extname(filename) === ".elm") {
        parseAndSendPackageSource(package, path.join(basedir, filename));
      }
      next();
    });
  });
}


function getProjectDeps(projectDir) {
  var packages = [];
  try {
    var depsPath = path.join(projectDir, "elm-stuff/exact-dependencies.json");
    var deps = JSON.parse(fs.readFileSync(depsPath).toString());
    var packageJsonPath = path.join(projectDir, "elm-package.json");
    var packageJson = JSON.parse(fs.readFileSync(packageJsonPath).toString());
    var exposedPackages = Object.keys(packageJson["dependencies"]);

    packages =
      Object.keys(deps).map(function(packageName) {
      return {
        name: packageName,
        version: deps[packageName]
      };
    }).filter(function(pck) {
      return exposedPackages.indexOf(pck.name) > -1;
    });


  } catch (e) {
    console.log("Failed to get projectDeps: " + e.toString());
  }
  return packages;
}




function parseAndSend(file) {

  try {
    var code = fs.readFileSync(file).toString();
    var start = new Date().getTime();

    if (code.length > 0) {
      var ast = elmParser.parse(code);
      // console.log("Parsed sourcefile (" + ((new Date().getTime()) - start)  + " ms) - " + file );

      sendAstMsg({
        file: file,
        type: "parsed",
        ast: ast
      });
    }

  } catch (e) {
    sendAstMsg({
      file: file,
      type: "parseError",
      error: e
    });
  }
}

function parseAndSendPackageSource(package, file) {
  try {
    var exposedModules = getExposedModules(package.packageDir);

    var shouldParse = exposedModules.map (function (mod) {
      return mod.replace(".", path.sep) + ".elm";
    }).find(function (v) {
      return file.endsWith(v);
    });


    if(shouldParse) {
      var ast = elmParser.parse(fs.readFileSync(file).toString());
      sendAstMsg({
        file: file,
        type: "parsed",
        ast: ast,
        package: package
      });
    }

  } catch(e) {
    console.error("ERROR parsing package source: " + file + "\n" + e.toString());
  }
}




function sendAstMsg(msg) {
  send([1, "elm.ast.update", msg]);
}


function getSourceDirs (projectDir) {
  var jsonPath = path.join(projectDir, "elm-package.json");

  var sourceDirs = [];
  try {
    var json = JSON.parse(fs.readFileSync(jsonPath).toString());
    sourceDirs = json["source-directories"];

  } catch(e) {
    console.error("ERROR getting sourcedirs for: " + jsonPath + "\n" + e.toString());
  }
  return sourceDirs;
}

function getExposedModules (projectDir) {
  var jsonPath = path.join(projectDir, "elm-package.json");

  var modules = [];
  try {
    var json = JSON.parse(fs.readFileSync(jsonPath).toString());
    modules = json["exposed-modules"];

  } catch(e) {
    console.log("ERROR getting exposed modules for: " + jsonPath + "\n" + e.toString());
  }
  return modules;
}




function fileExists(file) {
  var stat = null;
  try {
    stat = fs.statSync(file);
  } catch (e) {}

  return stat ? true : false;
}

function isSourceFile(sourceDirs, file) {
  if (path.extname(file) !== ".elm") {
    return false;
  }


  var hits = sourceDirs.map(function(dir) {
    return path.resolve(process.cwd(), dir);
  }).filter(function (d) {
    return file.startsWith(d);
  });

  return hits.length > 0;
}




/* ----------- HANDLER RELATED FUNCTIONS --------- */

// For ast operations that executes right after connecting
// NoOp, just passes back and trigger appropriate behavior
function handleAstPassThrough(clientId, msg) {
  send([clientId, msg.target, msg.data]);
}

function handleReloadAst(clientId) {
  doPackageInstall();
  parseSourceFiles();
  parseAllPackageSources();
  send([clientId, "elm.ast.reload.started", null]);
}

function handleParseEditorText(clientId, msg) {
  try {
    var start = new Date().getTime();
    var ast = elmParser.parse(msg.code);
    // console.log("Parsed editor contents in (" + ((new Date().getTime()) - start)  + " ms) ");
    send([clientId, "editor.elm.ast.parsetext.result", {ast: ast}]);
  } catch(e) {
    send([clientId, "editor.elm.ast.parsetext.result", {error: e}]);
  }

}



function handleReplRestart(clientId) {
  elmGlobals.repl.stdout.removeAllListeners("data");
  elmGlobals.repl.stderr.removeAllListeners("data");

  elmGlobals.repl.kill();
  startRepl(
    function (err) {
      console.error(err);
      handleClose();
    },
    function (out) {
      send([clientId, "elm.repl.restart.res", "hopefully ok..."]);
    },

    process.cwd()
  );
}

function idxReplTerminator(x) {
  return x.lastIndexOf(os.EOL + ">");
}

function maybeRemoveLastLine (x) {
  var idx = idxReplTerminator(x);

  if( idx > -1) {
    return x.substring(0, idx);
  } else {
    return x;
  }
}



function stripReplNewLines(x) {
  var arr = x.split(" ");
  var idx = arr.findIndex(function(v, i, a) { return v !== "" && v !== "|"; });
  return idx > -1 ? arr.slice(idx).join(" ") : "";
}



function handleEval(clientId, msg) {
  var meta = msg.meta;

  var errBuff = "";
  var outBuff = "";

  var onOut = function(data) {
    if(errBuff.length > 0) {
      send([clientId, "editor.elm.eval.err", {result: errBuff, meta: meta}]);
      return;
    }
    outBuff += stripReplNewLines(data.toString());
    if (outBuff.trim() === ">") {
      send([clientId, "editor.elm.eval.res", {result: "✓", meta: meta}]);
      return;
    }

    var idx = idxReplTerminator(outBuff);
    if (idx >= 0) {
      var res = maybeRemoveLastLine(outBuff);
      if (res.length > 0) {
        send([clientId, "editor.elm.eval.res", {result: res, meta: meta}]);
      } else {
        send([clientId, "editor.elm.eval.res", {result: "✓", meta: meta}]);
      }
    }
  };


  var onErr = function(data) {
    errBuff += data.toString();
  };

  elmGlobals.repl.stdout.removeAllListeners("data");
  elmGlobals.repl.stderr.removeAllListeners("data");

  elmGlobals.repl.stdout.on("data", onOut);
  elmGlobals.repl.stderr.on("data", onErr);

  elmGlobals.repl.stdin.write(msg.code.replace(/\n/g, "\\\n") + "\n");
}




function parseMakeResults(data) {
  var results =
      data.split("\n")
          .filter(function(s) { return s.indexOf("[{") === 0;})
          .map(function (item) { return JSON.parse(item); })
  if (results.length > 0) {
    results = results.reduce(function(a, b) {return a.concat(b);});
  }
  return results;
}

function send(msg) { process.send(msg); }

function handleLint(clientId, msg) {
  var res = cp.spawnSync("elm-make",
               [msg.path, "--warn", "--yes", "--report=json", "--output=/dev/null"],
               {cwd: process.cwd()});


  var err = res.output[2] + "";
  if (err) {
    send([clientId, "elm.make.err", err]);
  } else {
    var lintResults = parseMakeResults(res.output[1].toString());
    send([clientId, msg.handler, lintResults]);
  }
}

function lowerFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}



function inferOutputFile(filePath) {
  var parsed = path.parse(filePath);
  parsed.ext = "js";
  parsed.base = lowerFirstLetter(parsed.name) + ".js";
  parsed.name = lowerFirstLetter(parsed.name);

  return path.format(parsed);
}

function handleMake(clientId, msg) {
  if(!msg.path) {
    send([clientId, "elm.make.res", []]);
    return;
  }

  var outputFile = msg.outputFile || inferOutputFile(msg.path);
  var res = cp.spawnSync("elm-make",
               [msg.path, "--warn", "--yes", "--report=json", "--output=" + outputFile],
               {cwd: process.cwd()});


  var err = res.output[2] + "";
  if (err.length > 1) {
    send([clientId, "elm.make.err", err]);
  } else {
    var results = {
      outputFile: outputFile,
      res: parseMakeResults(res.output[1].toString())
    };
    send([clientId, "elm.make.res", results]);
  }
}


function handleGendoc(clientId, msg) {
  var res = cp.spawnSync("elm-make",
               [msg.path, "--yes", "--docs=elm-stuff/docs.json", "--output=/dev/null"],
               {cwd: process.cwd()});

  var err = res.output[2] + "";
  if (err) {
    send([clientId, "elm.make.err", err]);
  } else {
    var docFile = path.join(process.cwd(), "elm-stuff", "docs.json");
    var docResults = fs.readFileSync(docFile, "utf-8");

    //var docResults = res.output[1].toString();
    send([clientId, "elm.gendoc.res", docResults]);
  }
}



function handleDocsSearch(clientId, msg) {
  // workaround, just pass the msg back, will perform search client side
  send([clientId, "doc.search.results", msg])
}



function handleTest(clientId, msg) {
  var elmTest =  cp.fork("/Users/mrundberget/projects/node-test-runner/bin/elm-test",
                         [msg.file, "--report=json"],
                         {cwd: process.cwd(), silent: true});


  elmTest.stdout.on("data", function(out) {
    //console.log("Test out: " + out);
    try {
      var rawMessages = out.toString().split("\n").filter(function(s) { return s.indexOf("{\"event") === 0;});
      rawMessages.forEach (function (rawMessage) {
        var testMsg = JSON.parse(rawMessage);
        send([clientId, "elm.test.result", testMsg])
      });
    } catch (e) {
      console.error("Error parsing: " + out);
      console.error(e);
    }
  });

  elmTest.stderr.on("data", function(err) {
    console.error("Error stuff: " + err)
  });

  elmTest.on("error", function(err) {
    console.log("Elm test error event: ");
    console.log(err);
  });

  elmTest.on("exit", function(exitCode) {
    console.log("Exit test process with exitCode: " + exitCode);
  });


}


/* Kill any externaly spawned children
   Useful mostly for OS/X (reactor process)
*/
function killExternalChildren(pid, cb) {
  var callback = cb || function () {};

  psTree(pid, function (err, children) {
    [pid].concat(
      children.map(function (p) {
        return p.PID;
      })
    ).forEach(function (tpid) {
      try { process.kill(tpid, "SIGKILL") }
      catch (ex) { }
    });

    callback();
  });
}



function handleClose() {
  if(elmGlobals.watcher) {
    elmGlobals.watcher.close();
  }

  if(os.platform() !== "darwin") {
    process.exit(0);
  } else {
    if (elmGlobals.reactor) {
      killExternalChildren(elmGlobals.reactor.pid, null);
      // Ugly, but couldn`t figure out a better way to ensure child killing completed before exit
      setTimeout(function () {
        process.exit(0);
      }, 100);
    } else {
      process.exit(0);
    }
  }
}







//setTimeout(function() {handleClose();}, 30000);

