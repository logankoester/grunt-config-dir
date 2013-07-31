/*
 * grunt-config-dir
 * https://github.com/logankoester/grunt-config-dir
 *
 * Copyright (c) 2013 Logan Koester
 * Licensed under the MIT license.
 */

'use strict';

var walk = require('fs-walk');
var path = require('path');

module.exports = function(grunt, options, errHandler) {
  var res, regexp, match;

  // Set options
  res = { options: {} };
  res._defaultOptions = {
    configDir: path.resolve('grunt'),
    fileExtensions: ['js', 'coffee']
  };
  grunt.util._.extend(res.options, res._defaultOptions, options);

  res.fileExtensionPattern = res.options.fileExtensions.join('|');
  res.regexp = new RegExp('^(.*).(' + res.fileExtensionPattern + ')$');
  res.files = [];
  res.ignored = [];
  
  res.walk = walk.walkSync(res.options.configDir, function(baseDir, filename, stat){

    if ( match = filename.match(res.regexp) ) {
      grunt.config.set(match[1], require(baseDir + '/' + filename)(grunt));
      res.files.push({ baseDir: baseDir, filename: filename, stat: stat });

      if (res.options.verbose) {
        grunt.verbose.ok('grunt.config property [' + match[1] + '] loaded from ' + filename);
      }
    } else {
      res.ignored.push({ baseDir: baseDir, filename: filename, stat: stat });
      if (res.options.verbose) {
        grunt.verbose.debug('grunt.config file ignored: ' + filename);
      }
    }
  }, function(err){
    grunt.verbose.error('grunt.config file error: ' + err);
    if (typeof errHandler === 'function') {
      errHandler(err);
    }
  });

  return res;
};
