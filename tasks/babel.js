'use strict';
var path = require('path');
var babel = require('babel-core');

module.exports = function (grunt) {
	grunt.registerMultiTask('babel', 'Use next generation JavaScript, today', function () {
		var options = this.options();
		var callback = options.callback
		var filenames = []

		this.files.forEach(function (el) {
			delete options.callback;
			delete options.filename;
			delete options.filenameRelative;

			// for callback
			filenames.push(el.dest)

			options.sourceFileName = path.relative(path.dirname(el.dest), el.src[0]);

			if (process.platform === 'win32') {
				options.sourceFileName = options.sourceFileName.replace(/\\/g, '/');
			}

			options.sourceMapTarget = path.basename(el.dest);

			var res = babel.transformFileSync(el.src[0], options);
			var sourceMappingURL = '';

			if (res.map) {
				sourceMappingURL = '\n//# sourceMappingURL=' + path.basename(el.dest) + '.map';
			}

			grunt.file.write(el.dest, res.code + sourceMappingURL + '\n');

			if (res.map) {
				grunt.file.write(el.dest + '.map', JSON.stringify(res.map));
			}

		});

		if (callback) {
			callback(grunt, filenames)
		}
	});
};
