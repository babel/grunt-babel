"use strict";
const path = require("path");

let babel;
try {
  babel = require("@babel/core");
} catch (err) {
  if (err.code === "MODULE_NOT_FOUND") {
    err.message +=
      "\n grunt-babel@8 requires Babel 7.x (the package '@babel/core'). " +
      "If you'd like to use Babel 6.x ('babel-core'), you should install 'grunt-babel@7'.";
  }
  throw err;
}

// Since we've got the reverse bridge package at @babel/core@6.x, give
// people useful feedback if they try to use it alongside babel-loader.
if (/^6\./.test(babel.version)) {
  throw new Error(
    "\n grunt-babel@8 will not work with the '@babel/core@6' bridge package. " +
      "If you want to use Babel 6.x, install 'grunt-babel@7'."
  );
}

module.exports = function(grunt) {
  grunt.registerMultiTask(
    "babel",
    "Use next generation JavaScript, today",
    function() {
      const done = this.async();

      const options = Object.assign({}, this.options());
      delete options.filename;
      delete options.filenameRelative;
      options.caller = Object.assign(
        {
          name: "grunt-babel",
        },
        options.caller
      );

      // Async reduce so that the files are written and logged in order.
      this.files
        .reduce((acc, el) => {
          const filename = el.src[0];

          const opts = Object.assign({}, options);

          opts.sourceFileName = path.relative(path.dirname(el.dest), el.src[0]);

          if (process.platform === "win32") {
            opts.sourceFileName = opts.sourceFileName.replace(/\\/g, "/");
          }

          return acc
            .then(() => babel.transformFileAsync(filename, opts))
            .then(res => {
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
        }, Promise.resolve())
        .then(() => done(), err => done(err));
    }
  );
};
