'use strict';

var grunt = require('grunt');
var path = require('path');
var configDir = require('../tasks/config_dir.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.config_dir = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },

  specified_option: function(test) {
    test.expect(2);

    var expected = {
      configDir: path.resolve('test/fixtures/'),
      fileExtensions: ['js']
    };

    var result = configDir( grunt, expected );

    test.equal(result.options.configDir, expected.configDir, 'configDir should be ' + expected.configDir );
    test.equal(result.options.fileExtensions, expected.fileExtensions, 'fileExtensions should be ' + expected.fileExtensions );

    test.done();
  },

  js_files: function(test) {
    test.expect(1);

    var result = configDir( grunt, { configDir: path.resolve('test/fixtures/'), fileExtensions: ['js'] } );
    test.equal('hello javascript', grunt.config.get('foo').message, 'should be evaluated into grunt.config');

    test.done();
  },

  coffee_files: function(test) {
    test.expect(1);

    var result = configDir( grunt, { configDir: path.resolve('test/fixtures/'), fileExtensions: ['coffee'] } );
    test.equal('hello coffeescript', grunt.config.get('bar').message, 'should be evaluated into grunt.config');

    test.done();
  },

  multiple_filetypes: function(test) {
    test.expect(1);

    var result = configDir( grunt, { configDir: path.resolve('test/fixtures/'), fileExtensions: ['js', 'coffee'] } );

    test.equal('js|coffee', result.fileExtensionPattern, 'should join file extensions delimited by |');
    test.done();
  }

};
