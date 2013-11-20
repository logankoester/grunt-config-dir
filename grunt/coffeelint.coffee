# Lint the coffeescript source files

module.exports = (grunt) ->
  grunt.loadNpmTasks 'grunt-coffeelint'

  all: ['src/**/*.coffee']
