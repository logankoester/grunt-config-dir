#
# * grunt-config-dir
# * https://github.com/logankoester/grunt-config-dir
# *
# * Copyright (c) 2013 Logan Koester
# * Licensed under the MIT license.
#

module.exports = (grunt) ->

  grunt.initConfig
    jshint:
      all: ['tasks/*.js']
      options:
        jshintrc: '.jshintrc'


  # Inject project configuration files from grunt/
  require('./tasks/config_dir')(grunt)

  grunt.registerTask 'default', ['coffee']
