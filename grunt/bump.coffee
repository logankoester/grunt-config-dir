# Bump the version on `grunt bump`

module.exports = (grunt) ->
  grunt.loadNpmTasks 'grunt-bump'

  options:
    commit: true
    commitMessage: 'Release v%VERSION%'
    commitFiles: ['package.json']
    createTag: true
    tagName: 'v%VERSION%'
    tagMessage: 'Version %VERSION%'
    push: false
