'use strict';
var fs = require('fs');

exports['6to5'] = {
	compile: function (test) {
		var f = fs.readFileSync('test/tmp/fixture.js', 'utf8');
		test.ok(/function/.test(f));
		test.ok(/sourceMappingURL/.test(f));

		test.done();
	}
};
