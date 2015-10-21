var fpath = require("path");
var fs = require("fs");
var net = require("net");
var psTree = require(fpath.join(__dirname, '../node_modules/ps-tree'));
var cp = require("child_process");



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
    send({"name":fpath.basename(projectPath),
          "type":"elm",
          "client-id": cid,
          "dir":fpath.dirname(projectPath),
          "tags": ["elm.client", "tcp.client"],
          "commands":["editor.elm.lint",
                      "editor.elm.hint",
                      "editor.elm.doc",
                      "docs.elm.search"]});
    process.stdout.write("connected!");
    startReactor(projectPath);
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
  reactor = cp.spawn("elm-reactor-unwrapped", [], {cwd: projectPath});
  reactor.stdout.on("data", function(out) {
    console.log("Reactor out: " + out);
  });
  reactor.stderr.on("data", function(err) {
    console.error("Reactor out: " + err);
  });

  psTree(reactor.pid, function (err, children) {reactorChildren = children; });
}


function startRepl(projectPath) {
  repl = cp.spawn("elm-repl", [], {cwd: projectPath});
}


function send(msg) { s.write(JSON.stringify(msg) + "\n"); }

function handle(req) {
  var cmd = req[1];

  if(cmd === "client.close") {
    handleClose(req);
  }
  if (cmd === "editor.elm.lint") {
    handleLint(req);
  }
  if (cmd === "editor.elm.hint") {
    handleHint(req);
  }
  if(cmd === "docs.elm.search") {
    handleDocsSearch(req);
  }
  if(cmd === "editor.elm.doc") {
    handleSingleDoc(req);
  }


}

function handleClose(req) {
  psTree(reactor.pid, function (err, children) {
    cp.spawn('kill', ['-9'].concat(children.map(function (p) { return p.PID })));
  });

  setTimeout(function() {
    reactor.kill();
    s.end();
    process.exit(0);
  }, 500)
}


function handleLint(req) {
  var clientId = req[0];
  var msg = req[2];
  var elmCmd = "elm-make " + msg.path + " --warn --yes --report=json --output=/dev/null";

  cp.exec(elmCmd, {cwd: msg['project-path']}, function (error, stdout, stderr) {
    var results =
        stdout.split("\n")
              .filter(function(s) { return s.indexOf("overview") > -1;})
              .map(function (item) { return JSON.parse(item); })
              .reduce(function(a, b) {return a.concat(b);});

    send([clientId, "elm.lint.res", results]);
  });
}

function handleHint(req) {
  var clientId = req[0];
  var msg = req[2];
  var aclPath = fpath.join(__dirname, '../node_modules/elm-oracle/bin/elm-oracle');
  var token = msg.token;
  var args = [msg.path, token];
  var outBuffer = "";

  // need to check if elm-stuff exists first !
  var acl = cp.fork(aclPath, args, {cwd: process.argv[4],
                                    silent: true,
                                    execPath: process.execPath,
                                    env: {"ATOM_SHELL_INTERNAL_RUN_AS_NODE": 1}})
  acl.stdout.on("data", function(out) {
    outBuffer += out;
  });
  acl.stderr.on("data", function(err) {
    console.log("Err from elm-oracle: " + err);
  });
  acl.on("message", function(msg) {
    console.log("Msg from elm-oracle: " + msg);
  });
  acl.on("exit", function(exitCode) {
    if(exitCode === 0) {
      var res = JSON.parse(outBuffer);
      var completions =
          res.map(function(x) {
            return {text: (x.name.indexOf(token) === 0 ?
                            x.name + " (" + x.fullName + ")" :
                            x.fullName) + " :: " + x.signature,
                    completion: x.name.indexOf(token) === 0 ? x.name : x.fullName};
          });

      send([clientId, "editor.elm.hints.result", completions]);
      //console.log(completions);
    }
  });

}

function handleDocsSearch(req) {
  var clientId = req[0];
  var term = req[2].search;
  var outBuffer = "";
  var aclPath = fpath.join(__dirname, '../node_modules/elm-oracle/bin/elm-oracle');

  var candidates =
      fs.readdirSync(process.argv[4])
        .filter(function (f) { return fpath.extname(f) === ".elm"; });

  if(candidates.length > 0) {
    var args = [candidates[0], term];
    // need to check if elm-stuff exists first !
    var acl = cp.fork(aclPath, args, {cwd: process.argv[4],
                                      silent: true,
                                      execPath: process.execPath,
                                      env: {"ATOM_SHELL_INTERNAL_RUN_AS_NODE": 1}})
    acl.stdout.on("data", function(out) {
      outBuffer += out;
    });

    acl.on("exit", function(exitCode) {
      if(exitCode === 0) {
        var res = JSON.parse(outBuffer);
        var items =
            res.map(function(x) {
              return {ns: x.fullName,
                      name: x.name,
                      args: x.signature,
                      doc: x.comment};
            });

        send([clientId, "doc.search.results", items]);

      } else {
        send(clientId, "doc.search.results", []);
      }
    });


  } else {
    send(clientId, "doc.search.results", []);
  }
}

function handleSingleDoc(req) {
  var clientId = req[0];
  var term = req[2].sym;
  var file = req[2].path;
  var loc = req[2].loc;
  var outBuffer = "";
  var aclPath = fpath.join(__dirname, '../node_modules/elm-oracle/bin/elm-oracle');
  var args = [file, term];

  // need to check if elm-stuff exists first !
  var acl = cp.fork(aclPath, args, {cwd: process.argv[4],
                                    silent: true,
                                    execPath: process.execPath,
                                    env: {"ATOM_SHELL_INTERNAL_RUN_AS_NODE": 1}})

  acl.stdout.on("data", function(out) {
    outBuffer += out;
  });

  acl.on("exit", function(exitCode) {
    if(exitCode === 0) {
      var res = JSON.parse(outBuffer);
      var items =
          res.map(function(x) {
            return {ns: x.fullName,
                    name: x.name,
                    args: x.signature,
                    doc: x.comment,
                    loc: loc};
          });

      send([clientId, "editor.elm.doc.result", items.length === 1 ? items[0] : null]);
    }
  });
}



connect(process.argv[4], parseInt(process.argv[2]), parseInt(process.argv[3]));

