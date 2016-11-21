# grunt-babel [![Build Status](https://travis-ci.org/babel/grunt-babel.svg?branch=master)](https://travis-ci.org/babel/grunt-babel)

> Use next generation JavaScript, today, with [Babel](https://babeljs.io)

*Issues with the output should be reported on the Babel [issue tracker](https://phabricator.babeljs.io).*


## Install

```
$ npm install --save-dev grunt-babel babel-preset-es2015
```


## Usage

```js
require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
	babel: {
		options: {
			sourceMap: true,
			presets: ['es2015']
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

See the Babel [options](https://babeljs.io/docs/usage/options), except for `filename` which is handled for you.

#### options.callback
Type: `Function`

Callback to run after files are transpiled.

Examples:

```js
grunt.initConfig({
	babel: {
		options: {
			callback: function(grunt, files) {
				console.log('Changed files:', files);
			}
		}
	}
  }
});
```

## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
