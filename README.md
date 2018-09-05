> This readme is for grunt-babel v8 + Babel v7
> Check the [7.x branch](https://github.com/babel/grunt-babel/tree/7.x) for docs with Babel v6

# grunt-babel [![Build Status](https://travis-ci.org/babel/grunt-babel.svg?branch=master)](https://travis-ci.org/babel/grunt-babel)

> Use next generation JavaScript, today, with [Babel](https://babeljs.io)

*Issues with the output should be reported on the Babel [issue tracker](https://github.com/babel/babel/issues).*

## Install

For Babel 7.x and grunt-babel v8
```sh
$ yarn add --dev grunt-babel @babel/core @babel/preset-env
```

For Babel 6.x and grunt-babel v7
```sh
$ yarn add --dev grunt-babel@7 @babel-core babel-preset-env
```
Note: See the [7.x branch](https://github.com/babel/grunt-babel/tree/7.x) for more examples of
usage of Babel 6.x. This README is primarily applicable for Babel 7.x

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

See the Babel [options](https://babeljs.io/docs/en/options), except for `filename` which is handled for you.

## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
