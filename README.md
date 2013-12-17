# Grunt: Config Directory
> Split a grunt configuration into multiple files

[![Build Status](https://travis-ci.org/logankoester/grunt-config-dir.png)](https://travis-ci.org/logankoester/grunt-config-dir)
[![Strider Status](http://ci.ldk.io/logankoester/grunt-config-dir/badge)](http://ci.ldk.io/logankoester/grunt-config-dir/)
[![status](https://sourcegraph.com/api/repos/github.com/logankoester/grunt-config-dir/badges/status.png)](https://sourcegraph.com/github.com/logankoester/grunt-config-dir)
[![Dependency Status](https://david-dm.org/logankoester/grunt-config-dir.png)](https://david-dm.org/logankoester/grunt-config-dir)
[![devDependency Status](https://david-dm.org/logankoester/grunt-config-dir/dev-status.png)](https://david-dm.org/logankoester/grunt-config-dir#info=devDependencies)
[![Gittip](http://img.shields.io/gittip/logankoester.png)](https://www.gittip.com/logankoester/)

[![NPM](https://nodei.co/npm/grunt-config-dir.png?downloads=true)](https://nodei.co/npm/grunt-config-dir/)
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

## Comparison with alternatives

Before choosing `grunt-config-dir`, you may want to explore other libraries with the same goal.

| Feature | [grunt-config-dir](https://github.com/logankoester/grunt-config-dir) | [load-grunt-config](https://github.com/firstandthird/load-grunt-config) |
|:---|:---:|:---:|
| Configurable tasks directory | :heavy_check_mark: | :heavy_check_mark: |
| Default tasks directory | `grunt/` | `grunt/` |
| CoffeeScript | :heavy_check_mark: | :heavy_check_mark: |
| Tests | :heavy_check_mark: | :heavy_check_mark: |
| Dogfooding | :heavy_check_mark: | :heavy_check_mark: |
| Compatibility with [grunt-environment](https://github.com/logankoester/grunt-environment) | :heavy_check_mark: | :question: |
| Support for returning a function | :x: | :heavy_check_mark: |
| Aliases file | :x: | :heavy_check_mark: |
| YAML support | :x: | :heavy_check_mark: |

## Contributing

1. Fork the [repository on Github](https://github.com/logankoester/grunt-config-dir)
2. Fetch a local clone
3. Install the dependencies: `$ npm install`
4. Run the test suite: `$ grunt`
5. Make your changes, and then [open a pull request](https://github.com/logankoester/grunt-config-dir/pulls)

Thanks!

## Release History

### 0.3.1

  * Converts source to CoffeeScript
  * Uses grunt/ directory in own source to provide usage example and test target
  * Adds nodeunit tests
  * Adds linting to test chain
  * Enforces dependency on `fs-walk`

### 0.3.0

  * Cleaner verbose logging
  * Fixed an issue with joining multiple file extensions
  * More comprehensive return object

### 0.2.0

  * Fixes entry point
  * Deprecates `verbose` option in favor of [grunt.verbose](http://gruntjs.com/api/grunt.log#verbose-and-notverbose)

### 0.1.0

  * First release

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/logankoester/grunt-config-dir/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

[![xrefs](https://sourcegraph.com/api/repos/github.com/logankoester/grunt-config-dir/badges/xrefs.png)](https://sourcegraph.com/github.com/logankoester/grunt-config-dir)
[![funcs](https://sourcegraph.com/api/repos/github.com/logankoester/grunt-config-dir/badges/funcs.png)](https://sourcegraph.com/github.com/logankoester/grunt-config-dir)
[![library users](https://sourcegraph.com/api/repos/github.com/logankoester/grunt-config-dir/badges/library-users.png)](https://sourcegraph.com/github.com/logankoester/grunt-config-dir)
[![authors](https://sourcegraph.com/api/repos/github.com/logankoester/grunt-config-dir/badges/authors.png)](https://sourcegraph.com/github.com/logankoester/grunt-config-dir)
[![Total views](https://sourcegraph.com/api/repos/github.com/logankoester/grunt-config-dir/counters/views.png)](https://sourcegraph.com/github.com/logankoester/grunt-config-dir)
[![Views in the last 24 hours](https://sourcegraph.com/api/repos/github.com/logankoester/grunt-config-dir/counters/views-24h.png)](https://sourcegraph.com/github.com/logankoester/grunt-config-dir)
