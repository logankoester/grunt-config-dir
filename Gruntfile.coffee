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

  grunt.loadNpmTasks 'grunt-contrib-jshint'

  grunt.registerTask 'default', ['jshint']
