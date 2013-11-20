walk = require 'fs-walk'
path = require 'path'

module.exports = (grunt, options, errHandler) ->

  # Set options
  res = options: {}
  res._defaultOptions =
    configDir: path.resolve('grunt')
    fileExtensions: ['js', 'coffee']
  grunt.util._.extend res.options, res._defaultOptions, options

  res.fileExtensionPattern = res.options.fileExtensions.join '|'
  res.regexp = new RegExp "^(.*).(#{res.fileExtensionPattern})$"

  res.files = []
  res.ignored = []

  res.walk = walk.walkSync(res.options.configDir, (baseDir, filename, stat) ->
    if match = filename.match(res.regexp)

      grunt.config.set match[1], require(
        path.join(baseDir, filename)
      )(grunt)

      res.files.push
        baseDir: baseDir
        filename: filename
        stat: stat

      if res.options.verbose
        msg = "grunt.config property [#{match[1]}] loaded from #{filename}"
        grunt.verbose.ok msg

    else
      res.ignored.push
        baseDir: baseDir
        filename: filename
        stat: stat

      if res.options.verbose
        grunt.verbose.debug "grunt.config file ignored: #{filename}"

  , (err) ->
    grunt.verbose.error "grunt.config file error: #{err}"
    errHandler err  if typeof errHandler is 'function'
  )
  res
