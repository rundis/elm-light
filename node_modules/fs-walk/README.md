fs-walk
=======

Synchronous and asynchronous recursive directory walking for node. Uses callbacks to mimic the API of the `fs` module.

## Usage

To asynchronously walk the `/etc` directory, and for example, change the file and directory permissions, do:

```
var walk = require('fs-walk');

walk.walk('/etc', function(basedir, filename, stat, next) {
	var perm = stat.isDirectory() ? 0755 : 0644;
    fs.chmod(path.join(basedir, filename), perm, next);
}, function(err) {
    if (err) console.log(err);
});
```

You can achieve the same result, synchronously:

```
var walk = require('fs-walk');

walk.walkSync('/etc', function(basedir, filename, stat) {
	var perm = stat.isDirectory() ? 0755 : 0644;
    fs.chmodSync(path.join(basedir, filename), perm, next);
});
```

Two convenience functions are provided for convenience, `walk.files` and `walk.dirs` (and their synchronous counterparts) to walk through files and directories.

```
var walk = require('fs-walk');

walk.files('/etc', function(basedir, filename, stat, next) {
	fs.chmod(path.join(basedir, filename), 0644, next);
}, function(err) {
    if (err) console.log(err);
});

walk.dirs('/etc', function(basedir, filename, stat, next) {
	fs.chmod(path.join(basedir, filename), 0755, next);
}, function(err) {
    if (err) console.log(err);
});
```


## License

(The MIT License)

Copyright (c) 2013 Conference Compass BV 

Maintainer:
Alberto Gonzalez <alberto@conference-compass.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
