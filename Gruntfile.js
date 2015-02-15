'use strict';
module.exports = function (grunt) {
	grunt.initConfig({
		'babel': {
			compile: {
				options: {
					sourceMap: true
				},
				files: {
					'test/tmp/fixture.js': 'test/fixture.js'
				}
			}
		},
		nodeunit: {
			tasks: ['test/test.js']
		},
		clean: {
			test: ['test/tmp/**']
		}
	});

	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');

	grunt.registerTask('default', ['clean', 'babel', 'nodeunit', 'clean']);
};
