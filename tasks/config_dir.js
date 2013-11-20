(function() {
  var path, walk;

  walk = require('fs-walk');

  path = require('path');

  module.exports = function(grunt, options, errHandler) {
    var res;
    res = {
      options: {}
    };
    res._defaultOptions = {
      configDir: path.resolve('grunt'),
      fileExtensions: ['js', 'coffee']
    };
    grunt.util._.extend(res.options, res._defaultOptions, options);
    res.fileExtensionPattern = res.options.fileExtensions.join('|');
    res.regexp = new RegExp("^(.*).(" + res.fileExtensionPattern + ")$");
    res.files = [];
    res.ignored = [];
    res.walk = walk.walkSync(res.options.configDir, function(baseDir, filename, stat) {
      var match, msg;
      if (match = filename.match(res.regexp)) {
        grunt.config.set(match[1], require(path.join(baseDir, filename))(grunt));
        res.files.push({
          baseDir: baseDir,
          filename: filename,
          stat: stat
        });
        if (res.options.verbose) {
          msg = "grunt.config property [" + match[1] + "] loaded from " + filename;
          return grunt.verbose.ok(msg);
        }
      } else {
        res.ignored.push({
          baseDir: baseDir,
          filename: filename,
          stat: stat
        });
        if (res.options.verbose) {
          return grunt.verbose.debug("grunt.config file ignored: " + filename);
        }
      }
    }, function(err) {
      grunt.verbose.error("grunt.config file error: " + err);
      if (typeof errHandler === 'function') {
        return errHandler(err);
      }
    });
    return res;
  };

}).call(this);
