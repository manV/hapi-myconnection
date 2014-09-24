'use strict';

// Load modules
var Lab = require('lab');
var Hapi = require('hapi');
var mysql = require('mysql');
var assert = require('assert');

// Declare internals
var internals = {};


// Test shortcuts
var lab = exports.lab = Lab.script();
var before = lab.before;
var after = lab.after;
var describe = lab.describe;
var it = lab.it;
var expect = Lab.expect;

// so much to do here!
describe('server', function() {
  var server = null;

  before(function(done) {
    server = Hapi.createServer();
    done();
  });

  after(function(done) {
    server = null;
    done();
  });

  it('should be able to register plugin', function(done) {
    server.pack.register({
      plugin: require('../'),
      options: {
        mysql: mysql,
        mysqlOptions: {
          host: 'localhost',
          user: 'root',
          password: 'root'
        }
      }
    }, function(err) {
      assert(err === undefined, 'An error was thrown but should not.');
      done();
    });
  });
});