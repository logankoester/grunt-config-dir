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
  var res, regexp, match, fileExtensionPattern;

  // Set options
  res = { options: {} };
  res._defaultOptions = {
    configDir: path.resolve('grunt'),
    fileExtensions: ['js', 'coffee'],
    verbose: false
  };
  grunt.util._.extend(res.options, res._defaultOptions, options);

  fileExtensionPattern = grunt.util._.join('|', res.options.fileExtensions);
  regexp = new RegExp('^(.*).(' + fileExtensionPattern + ')$');
  
  walk.walkSync(res.options.configDir, function(baseDir, filename, stat){

    if ( match = filename.match(regexp) ) {
      grunt.config.set(match[1], require(baseDir + '/' + filename)(grunt));

      if (res.options.verbose) {
        grunt.log.writeln('Grunt configuration [' + match[1] + '] loaded from' + filename + ' successfully.');
      }
    } else {
      if (res.options.verbose) {
        grunt.log.writeln('Grunt configuration file ignored: ' + filename);
      }
    }
  }, function(err){
    if (typeof errHandler === 'function') {
      errHandler(err);
    }
  });

  return res;
};
