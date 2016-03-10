# grunt-babel [![Build Status](https://travis-ci.org/babel/grunt-babel.svg?branch=master)](https://travis-ci.org/babel/grunt-babel)

> Use next generation JavaScript, today, with [Babel](https://babeljs.io)

*Issues with the output should be reported on the Babel [issue tracker](https://github.com/babel/babel/issues).*


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

The task is perfectly capable of working with grunt [file arrays](http://gruntjs.com/configuring-tasks#building-the-files-object-dynamically), which allows to process multiple files:
```js
require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
	babel: {
		options: {
			sourceMap: true,
			presets: ['es2015']
		},
		dist: {
			files: [{
				expand: true,
				cwd: 'app',
				src: ['**/*.es6.js'],
				dest: 'app',
				ext: '.js'
			}]
			
		}
	}
});

grunt.registerTask('default', ['babel']);
```



## Options

See the Babel [options](https://babeljs.io/docs/usage/options), except for `filename` which is handled for you.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
