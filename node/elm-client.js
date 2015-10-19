var fpath = require("path");
var net = require("net");


process.setMaxListeners(100);

var s = null;
var repl = null;

var connected = false;



function connect(projectPath, port, cid) {
  s = net.connect(port, "localhost");
  s.on("connect", function() {
    connected = true;
    send({"name":fpath.basename(projectPath), "type":"elm", "client-id": cid, "dir":fpath.dirname(projectPath), "tags": ["elm.client", "tcp.client"], "commands":["editor.eval.elm"]});
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

function startRepl(projectPath) {
  repl = require("child_process").spawn("elm-repl", [], {cwd: projectPath});
}



function send(msg) {
  //console.log("About to return:");
  //console.log(JSON.stringify(msg));
  s.write(JSON.stringify(msg) + "\n");
}

function handle(req) {
  var cmd = req[1];

  if(cmd === "client.close") {
    s.end();
    process.exit(0);
  }
  if (cmd === "editor.elm.lint") {
    handleLint(req);
  }

}

function handleLint(req) {
  var clientId = req[0];
  var msg = req[2];
  var elmCmd = "elm-make " + msg.path + " --warn --report=json --output=/dev/null";

  require("child_process").exec(elmCmd, {cwd: msg['project-path']}, function (error, stdout, stderr) {
    var results =
        stdout.split("\n")
              .filter(function(s) { return s.indexOf("overview") > -1;})
              .map(function (item) { return JSON.parse(item); })
              .reduce(function(a, b) {return a.concat(b);});

    send([clientId, "elm.lint.res", results]);
  });
}



connect(process.argv[4], parseInt(process.argv[2]), parseInt(process.argv[3]));

