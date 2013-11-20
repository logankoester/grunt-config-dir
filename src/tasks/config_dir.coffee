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

      grunt.verbose.ok "grunt.config property [#{match[1]}] loaded from #{filename}" if res.options.verbose

    else
      res.ignored.push
        baseDir: baseDir
        filename: filename
        stat: stat

      grunt.verbose.debug "grunt.config file ignored: #{filename}" if res.options.verbose

  , (err) ->
    grunt.verbose.error "grunt.config file error: #{err}"
    errHandler err  if typeof errHandler is 'function'
  )
  res
