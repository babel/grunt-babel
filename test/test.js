'use strict';
var fs = require('fs');

exports.babel = {
	compile: function (test) {
		var code = fs.readFileSync('test/tmp/fixture-compiled.js', 'utf8');
		test.ok(/function/.test(code));

		var map = fs.readFileSync('test/tmp/fixture-compiled.js.map', 'utf8');
		var json = JSON.parse(map);

		test.deepEqual(json.sources, ['../fixtures/fixture.js']);
		test.deepEqual(json.file, 'fixture-compiled.js');
		test.ok(/\/\/# sourceMappingURL=fixture-compiled.js.map\n$/.test(code));
		test.done();
	}
};
