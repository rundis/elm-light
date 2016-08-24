var fs = require('fs')
  , path = require('path')
  , async = require('async')

/**
 * Asynchronously list `dir` and all its descendents, 
 * calling `iterator` for each entry. Once all entries have
 * been listed, calls `callback`.
 *
 * @param {String} dir Path to the base directory of the listing.
 * @param {Function} iterator Function that will be called 
 * for each entry in the listing, passing 4 arguments: 
 *   * `basedir`: Base directory of the entry (relative to `dir`).
 *   * `file`: Name of the file
 *   * `stat`: Result of calling `fs.stat`
 *   * `next`: Asynchronous callback 
 * Passing an error to the iterator `next` callback will stop iteration
 * and the main `callback` will be called. 
 * @param {Function} callback Asynchronous callback.
 */
var walk = exports.walk = function(dir, iterator, callback) {
  var dirs = [dir];

  async.whilst(
    function() { return dirs.length },
    function(nextd) {
      var dir = dirs.shift();
      async.waterfall([
        function(nextrd) {
          fs.readdir(dir, nextrd);
        },
        function(files, nextf) {
          async.each(files, function(file, nexts) {
            var f = path.join(dir, file);
            fs.stat(f, function(err, stat) {
              if (stat && stat.isDirectory()) {
                dirs.push(f);
              } 
              if (stat) {
                iterator(dir, file, stat, nexts);
              }
            });
          }, nextf);
        }
      ], 
      nextd);
    }, 
    callback);

};

/**
 * Synchronously list `dir` and all its descendents, 
 * calling `iterator` for each entry.
 *
 * @param {String} dir Path to the base directory of the listing.
 * @param {Function} iterator Function that will be called 
 * for each entry in the listing, passing 4 arguments: 
 *   * `basedir`: Base directory of the entry (relative to `dir`).
 *   * `file`: Name of the file
 *   * `stat`: Result of calling `fs.stat`
 * 
 */
var walkSync = exports.walkSync = function(dir, iterator) {
    var dirs = [dir];

    while (dirs.length) {
        var dir = dirs.shift();
        var files = fs.readdirSync(dir);
        files.forEach(function(file) {
            var f = path.join(dir, file);
            var stat = fs.statSync(f);
            if (stat && stat.isDirectory()) {
                dirs.push(f);
            }
            if (stat) {
                iterator(dir, file, stat);
            }
        });
    }

};

/**
 * Asynchronously list all files in `dir` and its
 * descendants
 */
var files = exports.files = function(dir, iterator, callback) {
  walk(dir, function(root, file, stat, next) {
    if (stat.isFile()) {
      iterator(root, file, stat, next);
    } else {
      next();
    }
  }, callback);
};

/**
 * Synchronously list all files in `dir` and its
 * descendants
 */
var filesSync = exports.filesSync = function(dir, iterator) {
    walkSync(dir, function(root, file, stat) {
        if (stat.isFile()) {
            iterator(root, file, stat);
        }
    });
};

/**
 * Asynchronously list all directories in `dir` and its
 * descendants
 */
var dirs = exports.dirs = function(dir, iterator, callback) {
  walk(dir, function(root, file, stat, next) {
    if (stat.isDirectory()) {
      iterator(root, file, stat, next);
    } else {
      next();
    }
  }, callback);
};

/**
 * Synchronously list all directories in `dir` and its
 * descendants
 */
var dirsSync = exports.dirsSync = function(dir, iterator) {
    walkSync(dir, function(root, file, stat) {
        if (stat.isDirectory()) {
            iterator(root, file, stat);
        }
    });
};