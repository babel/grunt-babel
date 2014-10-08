'use strict';
module.exports = function (grunt) {
	grunt.initConfig({
		'6to5': {
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

	grunt.registerTask('default', ['clean', '6to5', 'nodeunit', 'clean']);
};
