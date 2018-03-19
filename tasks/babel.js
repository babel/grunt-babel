'use strict';
var path = require('path');
var babel;
try {
	babel = require('@babel/core');
} catch (error) {
	try{
		babel = require('babel-core');
	} catch (errorSub) {
		console.error('Please install @babel/core or babel-core');
		throw error;
	}	
}

module.exports = function (grunt) {
	grunt.registerMultiTask('babel', 'Use next generation JavaScript, today', function () {
		var options = this.options();

		this.files.forEach(function (el) {
			delete options.filename;
			delete options.filenameRelative;

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
	});
};
