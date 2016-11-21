# grunt-babel [![Build Status](https://travis-ci.org/babel/grunt-babel.svg?branch=master)](https://travis-ci.org/babel/grunt-babel)

> Use next generation JavaScript, today, with [Babel](https://babeljs.io)

*Issues with the output should be reported on the Babel [issue tracker](https://phabricator.babeljs.io).*


## Install

```
$ npm install --save-dev grunt-babel babel-preset-es2015
```


## Usage

Create a `.babelrc` config in your project root. Assuming you have installed the [ES2015 Preset](https://babeljs.io/docs/plugins/preset-es2015/), in order to enable it you have to define it in your `.babelrc` file, like this:

```json
{
  "presets": ["es2015"]
}
```

Then, your `Gruntfile.js` must be something like this:

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


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
