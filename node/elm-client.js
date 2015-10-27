var fpath = require("path");
var fs = require("fs");
var net = require("net");
var psTree = require(fpath.join(__dirname, '../node_modules/ps-tree'));
var cp = require("child_process");
var wrench = require(fpath.join(__dirname, '../node_modules/wrench'));



process.setMaxListeners(100);

var s = null;
var repl = null;
var reactor = null;
var reactorChildren = null;

var connected = false;



function connect(projectPath, port, cid) {
  s = net.connect(port, "localhost");
  s.on("connect", function() {
    connected = true;

    if(projectPath !== ".") {
      send({"name":fpath.basename(projectPath),
            "type":"elm",
            "client-id": cid,
            "dir": projectPath,
            "tags": ["elm.client", "tcp.client"],
            "commands":["editor.eval.elm",
                        "elm.repl.restart",
                        "editor.elm.lint",
                        "editor.elm.hint",
                        "editor.elm.doc",
                        "docs.elm.search"]});
      startReactor(projectPath);
    } else {
      send({"name":"Elm repl",
            "type":"elm",
            "client-id": cid,
            "dir":fpath.dirname(projectPath),
            "tags": ["elm.client", "tcp.client"],
            "commands":["editor.eval.elm"]});
    }
    startRepl(projectPath);
    process.stdout.write("connected!");

  });
  s.on("data", function(d) {
    var req = JSON.parse(d.toString());
    handle(req);
  });
  s.on("error", function(e) {
    console.error("connect error:" + e.stack);
  });

}


function startReactor(projectPath) {
  reactor = cp.spawn("elm-reactor", [], {cwd: projectPath});
  reactor.stdout.on("data", function(out) {
    console.log("Reactor out: " + out);
  });
  reactor.stderr.on("data", function(err) {
    console.error("Reactor err: " + err);
  });
}


function startRepl(projectPath) {
  repl = cp.spawn("elm-repl", [], {cwd: projectPath});
  repl.stdout.on("data", function(out) {});
}


function send(msg) { s.write(JSON.stringify(msg) + "\n"); }


function handle(req) {
  var clientId = req[0];
  var cmd = req[1];
  var msg = req[2];

  // project is required for all other actions
  if(process.argv[4] === "."
     && cmd !== "editor.eval.elm"
     && cmd !== "elm.repl.restart"
     && cmd !== "client.close") {
    send([clientId, "elm.unsupported", {err: "The command " + cmd + " is not supported unless you connect to a project"}]);
    return;
  }

  if(cmd === "editor.eval.elm") {
    handleEval(clientId, msg);
  }

  if(cmd === "client.close") {
    handleClose();
  }
  if (cmd === "editor.elm.lint") {
    handleLint(clientId, msg);
  }
  if (cmd === "editor.elm.hint") {
    handleHint(clientId, msg);
  }
  if(cmd === "docs.elm.search") {
    handleDocsSearch(clientId, msg);
  }
  if(cmd === "editor.elm.doc") {
    handleSingleDoc(clientId, msg);
  }
  if(cmd === "elm.repl.restart") {
    handleReplRestart(clientId, msg);
  }


}

function handleClose() {
  if(reactor) {
    psTree(reactor.pid, function (err, children) {
      var killer = cp.spawn('kill', ['-9'].concat(children.map(function (p) { return p.PID })));
      killer.on("exit", function(exitCode) {
        s.end();
        process.exit(0);
      });
    });
  } else {
    s.end();
    process.exit(0);
  }
}


function handleLint(clientId, msg) {
  var elmCmd = "elm-make " + msg.path + " --warn --yes --report=json --output=/dev/null";

  cp.exec(elmCmd, {cwd: msg['project-path']}, function (error, stdout, stderr) {
    var results =
        stdout.split("\n")
              .filter(function(s) { return s.indexOf("overview") > -1;})
              .map(function (item) { return JSON.parse(item); });
    if (results.length > 0) {
      results = results.reduce(function(a, b) {return a.concat(b);});
    }

    send([clientId, "elm.lint.res", results]);
  });
}

function aclSearch(args, callback) {
  var aclPath = fpath.join(__dirname, '../node_modules/elm-oracle/bin/elm-oracle');
  var outBuffer = "";
  var errBuff = "";

  var acl = cp.fork(aclPath, args, {cwd: process.argv[4],
                                    silent: true,
                                    execPath: process.execPath,
                                    env: {"ATOM_SHELL_INTERNAL_RUN_AS_NODE": 1}});

  acl.stdout.on("data", function(out) {
    outBuffer += out;
  });
  acl.stderr.on("data", function(err) {
    console.log("Err from elm-oracle: " + err);
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
  var args = [msg.path, token];

  aclSearch(args, function(err, res) {
    if(!err) {
      var completions =
          res.map(function(x) {
            return {text: (x.name.indexOf(token) === 0 ?
                            x.name + " (" + x.fullName + ")" :
                            x.fullName) + " :: " + x.signature,
                    completion: x.name.indexOf(token) === 0 ? x.name : x.fullName};
          });

      send([clientId, "editor.elm.hints.result", completions]);
    } else {
      send([clientId, "editor.elm.hints.result", []]);
    }
  });
}

function handleDocsSearch(clientId, msg) {

  var candidates =
      wrench.readdirSyncRecursive(process.argv[4])
        .filter(function (f) { return fpath.extname(f) === ".elm"; });

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

      send([clientId, "editor.elm.doc.result", items.length === 1 ? items[0] : null]);
    } else {
      send([clientId, "editor.elm.doc.result", []]);
    }
  });
}


function removeLastLine (x) {
  if(x.lastIndexOf("\n")>0) {
    return x.substring(0, x.lastIndexOf("\n"));
  } else {
    return x;
  }
}


function handleEval(clientId, msg) {
  var meta = msg.meta;

  var errBuff = "";

  var onOut = function(data) {
    var res = removeLastLine(data.toString());
    if(res.length > 0 && res.trim() !== ">") {
      send([clientId, "editor.elm.eval.res", {result: res, meta: meta}]);
    }
    if(res.trim() === ">" && errBuff === "") {
      send([clientId, "editor.elm.eval.res", {result: "✓", meta: meta}]);
    }

    if(errBuff.length > 0) {
      send([clientId, "editor.elm.eval.err", {result: errBuff, meta: meta}]);
    }
  };


  var onErr = function(data) {
    errBuff += data.toString();
  };

  repl.stdout.removeAllListeners("data");
  repl.stderr.removeAllListeners("data");

  repl.stdout.on("data", onOut);
  repl.stderr.on("data", onErr);

  repl.stdin.write(msg.code.replace(/\n/g, "\\\n") + "\n");
}

function handleReplRestart(clientId, msg) {
  repl.kill();
  startRepl(process.argv[4]);
  send([clientId, "elm.repl.restart.res", "hopefully ok..."]);
}



connect(process.argv[4], parseInt(process.argv[2]), parseInt(process.argv[3]));

