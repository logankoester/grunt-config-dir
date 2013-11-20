(function() {
  var grunt;

  grunt = require('grunt');

  exports.testFilesExist = function(test) {
    test.expect(2);
    test.ok(grunt.file.isDir('tasks'), 'should create the tasks/ directory');
    test.ok(grunt.file.isFile('tasks/config_dir.js'), 'should create the tasks/config_dir.js file');
    return test.done();
  };

}).call(this);
