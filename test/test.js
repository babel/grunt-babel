"use strict";
const fs = require("fs");

exports.babel = {
  compile: function(test) {
    const code = fs.readFileSync("test/tmp/fixture-compiled.js", "utf8");
    test.ok(/function/.test(code));

    const map = fs.readFileSync("test/tmp/fixture-compiled.js.map", "utf8");
    const json = JSON.parse(map);

    test.deepEqual(json.sources, ["../fixtures/fixture.js"]);
    test.deepEqual(json.file, "fixture-compiled.js");
    test.ok(/\/\/# sourceMappingURL=fixture-compiled.js.map\n$/.test(code));
    test.done();
  },
};
