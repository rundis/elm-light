var path = require("path");
var fs = require("fs");
var net = require("net");
var psTree = require("ps-tree");
var cp = require("child_process");
var wrench = require("wrench");
var os = require("os");


process.setMaxListeners(100);


var elmGlobals = {
  repl: null,
  reactor: null
};


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

/* ----------- HANDLER RELATED FUNCTIONS --------- */

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



function aclSearch(args, callback) {
  var aclPath = path.join(process.env.NODE_PATH, 'elm-oracle/bin/elm-oracle');
  var outBuffer = "";
  var errBuff = "";

  var acl = cp.fork(aclPath, args, {cwd: process.cwd(),
                                    silent: true,
                                    execPath: process.execPath,
                                    env: {"ATOM_SHELL_INTERNAL_RUN_AS_NODE": 1}});

  acl.stdout.on("data", function(out) {
    outBuffer += out;
  });
  acl.stderr.on("data", function(err) {
    console.error("Err from elm-oracle: " + err);
  });

  acl.on("exit", function(exitCode) {
    if(exitCode === 0) {
      var res = JSON.parse(outBuffer);
      callback(null, res);
    } else {
      callback("Error when calling elm-oracle : " + exitCode, null);
    }
  });
}

function handleHint(clientId, msg) {
  var token = msg.token;
  var args = [msg.path, token.string];
  var channel = msg.channel;


  if(!msg.path) {
    send([clientId, "editor.elm.hints.result", []]);
    return;
  }

  aclSearch(args, function(err, res) {
    if(!err) {
      var completions =
          res.map(function(x) {
            return {text: (x.name.indexOf(token) === 0 ?
                            x.name + " (" + x.fullName + ")" :
                            x.fullName) + " :: " + x.signature,
                    completion: x.name.indexOf(token) === 0 ? x.name : x.fullName};
          });

      send([clientId, "editor.elm.hints.result", {channel: channel, token: token, completions: completions}]);
    } else {
      send([clientId, "editor.elm.hints.result", {channel: channel, token: token, completions: []}]);
    }
  });
}

function handleDocsSearch(clientId, msg) {

  var candidates =
      wrench.readdirSyncRecursive(process.cwd())
        .filter(function (f) { return path.extname(f) === ".elm"; });

  if(candidates.length === 0) { // need an elm-file for completions/docs
    send([clientId, "doc.search.results", []]);
  }

  var args = [candidates[0], msg.search];
  aclSearch(args, function(err, res) {
    if(!err) {
      var items = res.map(function(x) {
                    return {ns: x.fullName,
                      name: x.name,
                      args: x.signature,
                      doc: x.comment};
                  });

        send([clientId, "doc.search.results", items]);
    } else {
      send([clientId, "doc.search.results", []]);
    }
  });
}


function handleSingleDoc(clientId, msg) {
  var args = [msg.path, msg.sym];


  if(!msg.path) {
    send([clientId, "editor.elm.doc.result", null]);
    return;
  }

  aclSearch(args, function(err, res) {
    if(!err) {
      var items =
          res.map(function(x) {
            return {ns: x.fullName,
                    name: x.name,
                    args: x.signature,
                    doc: x.comment,
                    loc: msg.loc};
          });

      if (items.length > 1) {
        items = items.filter(function (x) {return x.ns === msg.sym;});
      }

      send([clientId, "editor.elm.doc.result", items.length === 1 ? items[0] : null]);
    } else {
      send([clientId, "editor.elm.doc.result", null]);
    }
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
  if(os.platform() !== "darwin") {
    process.exit(0);
  } else {
    if (elmGlobals.reactor) {
      killExternalChildren(elmGlobals.reactor.pid, null);
      // Ugly, but couldn`t figure out a better way to ensure child killing completed before exit
      setTimeout(function () {
        process.exit(0);
      }, 100);
    }
  }
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
        case "editor.elm.hint":
          handleHint(cb, data);
          break;
        case "docs.elm.search":
          handleDocsSearch(cb, data);
          break;
        case "editor.elm.doc":
          handleSingleDoc(cb, data);
          break;


      }
    } catch (ex) {
      console.error("Error in elm client message listener for command: " + cmd);
      console.error(ex);
      handleClose();
    }
  });
}


/* ----------- START CLIENT / BOOTSTRAP --------- */

startRepl(
  function (err) {
    console.error(err);
    handleClose();
  },
  function (out) {
    elmGlobals.repl.stdout.removeAllListeners("data");
    //elmGlobals.repl.stderr.removeAllListeners("data");
    startReactor(
      function (err) {
        console.error (err);
        handleClose();
      },
      function (out) {
        elmGlobals.reactor.stderr.removeAllListeners("data");
        startMessageListener();
      },
      process.cwd(),
      parseInt(process.argv[2])
    );
  },
  process.cwd()
);

//setTimeout(function() {handleClose();}, 30000);

