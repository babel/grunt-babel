# grunt-6to5 [![Build Status](https://travis-ci.org/6to5/grunt-6to5.svg?branch=master)](https://travis-ci.org/6to5/grunt-6to5)

> Turn ES6 code into vanilla ES5 with no runtime required using [6to5](https://github.com/sebmck/6to5)

*Issues with the output should be reported on the 6to5 [issue tracker](https://github.com/sebmck/6to5/issues).*


## Install

```sh
$ npm install --save-dev grunt-6to5
```


## Usage

```js
require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
	'6to5': {
		options: {
			sourceMap: true
		},
		dist: {
			files: {
				'dist/app.js': 'src/app.js'
			}
		}
	}
});

grunt.registerTask('default', ['6to5']);
```


## Options

See the `6to5` [options](https://6to5.org/usage.html#options), except for `filename` which is handled for you.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
