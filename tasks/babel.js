"use strict";
const path = require("path");
const babel = require("@babel/core");

module.exports = function(grunt) {
  grunt.registerMultiTask(
    "babel",
    "Use next generation JavaScript, today",
    function() {
      const options = this.options();

      this.files.forEach(function(el) {
        delete options.filename;
        delete options.filenameRelative;

        options.sourceFileName = path.relative(
          path.dirname(el.dest),
          el.src[0]
        );

        if (process.platform === "win32") {
          options.sourceFileName = options.sourceFileName.replace(/\\/g, "/");
        }

        const res = babel.transformFileSync(el.src[0], options);
        let sourceMappingURL = "";

        if (res.map) {
          sourceMappingURL =
            "\n//# sourceMappingURL=" + path.basename(el.dest) + ".map";
        }

        grunt.file.write(el.dest, res.code + sourceMappingURL + "\n");

        if (res.map) {
          res.map.file = path.basename(el.dest);
          grunt.file.write(el.dest + ".map", JSON.stringify(res.map));
        }
      });
    }
  );
};
