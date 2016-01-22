/*!
 * Harbor
 * Copyright (c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * External module dependencies
 */

var EventEmitter = require('events').EventEmitter;
var inherits = require('util').inherits;
var net = require('net');

/*!
 * Primary export - factory
 */

module.exports = Harbor;

/**
 * ## Harbor (min, max)
 *
 * Construct a port finding interface that
 * will retain a list of claimed ports within
 * a given `min` / `max` set.
 *
 * Events
 *
 * - `claim (name, port)` upon the claim of a port
 * - `release (name, port)` upon the release of a port
 * - `full ()` upon all in bounds being claimed
 *
 * @param {Number} lower bound inclusive
 * @param {Number} upper bound inclusive
 * @name Harbor (constructor)
 * @api public
 */

function Harbor (min, max) {
  if (!(this instanceof Harbor)) return new Harbor(min, max);
  EventEmitter.call(this);
  this.ports = {};
  this.min = min || 2000;
  this.max = max || 20000;
}

/*!
 * Inherits from EventEmitter
 */

inherits(Harbor, EventEmitter);

/**
 * ### .claimed
 *
 * Get an array of all claimed ports by this interface.
 *
 * @returns {Array} ports claimed
 * @name claimed
 * @api public
 */

Object.defineProperty(Harbor.prototype, 'claimed', {
  get: function () {
    var claimed = [];
    var keys = Object.keys(this.ports);
    var ports = this.ports;

    keys.forEach(function (name) {
      claimed.push(ports[name]);
    });

    return claimed;
  }
});

/**
 * ### _claim (name, cb)
 *
 * Find an available port from the pool of open
 * ports and claim it for a given name.
 *
 * @param {String} name
 * @param {Function} callback
 * @cb {Error|null}
 * @cb {Number} claimed port
 * @name _claim
 * @api private
 */

function _claim(name, cb) {
  var self = this;

  if (this.ports[name]) {
    return cb(null, this.ports[name]);
  }

  checkPort.call(this, this.min, function (err, port) {
    if (err) return cb(err);
    self.ports[name] = port;
    self.emit('claim', name, port);
    cb(null, port);
  });
};

/**
 * ### .claim (name, cb)
 *
 * Find an available port from the pool of open
 * ports (or use a provided port) and claim it for a given name.
 *
 * @param {String} name
 * @param {Number} [port]
 * @param {Function} callback
 * @cb {Error|null}
 * @cb {Number} claimed port
 * @name claim
 * @api public
 */

Harbor.prototype.claim = function (name, port, cb) {
  var self = this;

  if ('function' === typeof port) {
    return _claim.call(this, name, port);
  }

  var _port = parseInt(port, 10);
  if (!isNaN(_port) && _port > 0) {
    if (this.ports[name]) {
      return cb(null, this.ports[name]);
    }

    checkPort.call(this, _port, _port, function (err, port) {
      if (err) return cb(err);
      self.ports[name] = port;
      self.emit('claim', name, port);
      cb(null, port);
    });
  } else {
    return cb(new Error('No valid port.'));
  }
};

/**
 * ### .release (name)
 *
 * Indicate that the claimed port for `name`
 * is no longer is use and can be returned to
 * the available pool.
 *
 * @param {String} name
 * @name release
 * @api public
 */

Harbor.prototype.release = function (name) {
  var port = this.ports[name];

  if (port) {
    delete this.ports[name];
    this.emit('release', name, port);
  }
};

/**
 * # checkPort
 *
 * Will attempt to connect to a given port. If success,
 * will disconnect and pass that number to a callback.
 *
 * @param {Number} num Port to check
 * @param {Number} max Max port to check
 * @param {Function} callback
 */

function checkPort (num, max, cb) {
  var self = this;

  if ('function' === typeof max) {
    cb = max;
    max = this.max;
  }

  // if already claimed, skip
  if (~this.claimed.indexOf(num)) {
    return process.nextTick(function () {
      checkPort.call(self, ++num, cb);
    });
  }

  var server = new net.Server();

  // if error, we don't want this server
  server.on('error', function (err) {
    if (num == max) {
      self.emit('full');
      return cb(new Error('No ports available in range.'));
    }

    checkPort.call(self, ++num, cb);
  });

  // if listening, we want to disconnect and pass back port
  server.listen(num, function () {
    server.on('close', function () {
      cb(null, num);
    });
    server.close();
  });
}
