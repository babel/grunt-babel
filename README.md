> This readme is for grunt-babel v8 + Babel v7
> Check the [7.x branch](https://github.com/babel/grunt-babel/tree/7.x) for docs with Babel v6

# grunt-babel [![Build Status](https://travis-ci.org/babel/grunt-babel.svg?branch=master)](https://travis-ci.org/babel/grunt-babel)

> Use next generation JavaScript, today, with [Babel](https://babeljs.io)

*Issues with the output should be reported on the Babel [issue tracker](https://github.com/babel/babel/issues).*

## Install

```
$ yarn add --dev grunt-babel @babel/core @babel/preset-env
```

## Usage

```js
require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
  babel: {
    options: {
      sourceMap: true,
      presets: ['@babel/preset-env']
    },
    dist: {
      files: {
        'dist/app.js': 'src/app.js'
      }
    }
  }
});

grunt.registerTask('default', ['babel']);
```

## Options

See the Babel [options](https://babeljs.io/docs/usage/api/#options), except for `filename` which is handled for you.

## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
