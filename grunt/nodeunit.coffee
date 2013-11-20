# Configure grunt tasks for nodeunit tests

module.exports = (grunt) ->
  grunt.loadNpmTasks 'grunt-contrib-nodeunit'

  all: ['test/**/*_test.js']
