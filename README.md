# grunt-config-dir

[![Build Status](https://travis-ci.org/logankoester/grunt-config-dir.png)](https://travis-ci.org/logankoester/grunt-config-dir)

> Split a grunt configuration into multiple files

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-config-dir --save-dev
```

## Overview

Somewhere in your project's Gruntfile, initialize `grunt-config-dir`  like this:

```js
require('grunt-config-dir')(grunt, {
    configDir: require('path').resolve('grunt'),
    fileExtensions: ['js', 'coffee']
}, function(err){ grunt.log.error(err) });
```

Then create your `configDir` and move as many properties as you wish from `grunt.config` into files beneath it. Filenames with truncated
extensions are used as the property keys. Your property files should export a function expecting the `grunt` object as a parameter,
which returns the property value.

### Options

#### options.configDir
Type: `String`
Default value: `path.resolve('grunt')`

A directory relative to the `Gruntfile` to contain your grunt.config property files.

#### options.fileExtensions
Type: `Array`
Default value: `['js', 'coffee']`

Valid file extensions to import properties from within `configDir`.

### Usage Example

#### Gruntfile.js

```js
require('grunt-config-dir')(grunt);

grunt.initConfig({
  // copy config has been moved to `grunt/copy.js`
  /*
  copy: {
    main: {
      files: [
        { expand: true, src: ['path/*'], dest: 'dest/', filter: 'isFile' }
      ]
    }
  }
  */
});

// grunt.loadNpmTasks('grunt-contrib-copy');
```

#### grunt/copy.js

```js
module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-copy');

  return {
    main: {
      files: [
        { expand: true, src: ['path/*'], dest: 'dest/', filter: 'isFile' }
      ]
    }
  };

};
```

## Contributing

1. Fork the [repository on Github](https://github.com/logankoester/grunt-config-dir)
2. Fetch a local clone
3. Install the dependencies: `$ npm install`
4. Run the test suite: `$ grunt`
5. Make your changes, and then [open a pull request](https://github.com/logankoester/grunt-config-dir/pulls)

Thanks!

## Release History

0.3.0 - Cleaner verbose logging, fixed an issue with joining multiple file extensions, more comprehensive return object

0.2.0 - Fixes entry point, deprecates `verbose` option in favor of [grunt.verbose](http://gruntjs.com/api/grunt.log#verbose-and-notverbose)

0.1.0 - First release


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/logankoester/grunt-config-dir/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

