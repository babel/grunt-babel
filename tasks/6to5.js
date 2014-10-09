'use strict';
var to5 = require('6to5');

module.exports = function (grunt) {
	grunt.registerMultiTask('6to5', 'Transpile ES6 to ES5', function () {
		var options = this.options();

		this.files.forEach(function (el) {
			options.filename = el.src[0];

			var res = to5.transformFileSync(el.src[0], options);

			grunt.file.write(el.dest, res.code);

			if (res.map) {
				grunt.file.write(el.dest + '.map', JSON.stringify(res.map));
			}
		});
	});
};
