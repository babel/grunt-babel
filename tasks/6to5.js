'use strict';
var to5 = require('6to5');

module.exports = function (grunt) {
	grunt.registerMultiTask('6to5', 'Transpile ES6 to ES5', function () {
		var options = this.options();

		this.files.forEach(function (el) {
			delete options.filename;
			delete options.filenameRelative;

			var res = to5.transformFileSync(el.src[0], options);

			var sourceMappingURL = '';
			if (res.map) {
				sourceMappingURL = grunt.util.linefeed + '//# sourceMappingURL=' + el.dest.split('/').pop() + '.map';
			}

			grunt.file.write(el.dest, res.code + sourceMappingURL);

			if (res.map) {
				grunt.file.write(el.dest + '.map', JSON.stringify(res.map));
			}
		});
	});
};
