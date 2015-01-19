'use strict';
var to5 = require('6to5');
var fs = require('fs');

module.exports = function (grunt) {
	grunt.registerMultiTask('6to5', 'Transpile ES6 to ES5', function () {
		var options = this.options();

		this.files.forEach(function (el) {
			delete options.filename;
			delete options.filenameRelative;

			var code = '';
			el.src.forEach(function (src) {
				code += grunt.file.read(src);
			});

			var res = to5.transform(code, options);

			grunt.file.write(el.dest, res.code);

			if (res.map) {
				grunt.file.write(el.dest + '.map', JSON.stringify(res.map));
			}
		});
	});
};
