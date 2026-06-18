"use strict";
module.exports = function(grunt) {
  grunt.initConfig({
    babel: {
      compile: {
        options: {
          sourceMap: true,
          // Target an old environment so that the test fixture is actually
          // transpiled (e.g. classes -> functions) regardless of the default
          // targets, which differ between Babel 7 and Babel 8.
          presets: [["@babel/preset-env", { targets: { ie: "11" } }]],
        },
        files: {
          "test/tmp/fixture-compiled.js": "test/fixtures/fixture.js",
        },
      },
    },
    nodeunit: {
      tasks: ["test/test.js"],
    },
    clean: {
      test: ["test/tmp/**"],
    },
  });

  grunt.loadTasks("tasks");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-nodeunit");

  grunt.registerTask("default", ["clean", "babel", "nodeunit", "clean"]);
};
