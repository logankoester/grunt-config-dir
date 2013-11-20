# Configure grunt tasks for CoffeeScript compilation

module.exports = (grunt) ->
  grunt.loadNpmTasks 'grunt-contrib-coffee'

  tasks:
    expand: true
    cwd: 'tasks'
    src: ['**/*.coffee']
    dest: 'tasks/'
    ext: '.js'
