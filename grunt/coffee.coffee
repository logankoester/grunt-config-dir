# Configure grunt tasks for CoffeeScript compilation

module.exports = (grunt) ->
  grunt.loadNpmTasks 'grunt-contrib-coffee'

  tasks:
    expand: true
    cwd: 'src/tasks'
    src: ['**/*.coffee']
    dest: 'tasks/'
    ext: '.js'

  test:
    expand: true
    cwd: 'src/test'
    src: ['**/*.coffee']
    dest: 'test/'
    ext: '.js'
