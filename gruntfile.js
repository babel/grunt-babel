'use strict';
module.exports = function (grunt) {
	grunt.initConfig({
		cfg: {
			test: 'test'
		},
		babel: {
			compile: {
				options: {
					sourceMap: true,
					presets: ['env']
				},
				files: {
					'<%= cfg.test %>/tmp/fixture-compiled.js': '<%= cfg.test %>/fixtures/fixture.js'
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
