# Clean the output directories before recompiling

module.exports = (grunt) ->
  grunt.loadNpmTasks 'grunt-contrib-clean'

  all: ['tasks/', 'test/']
