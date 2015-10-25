## Using loaders
In this example we'll try to illustrate how webpack works. It extends the the require() function of node.js, so by default it can load any javascript module.

You can test this configuration hitting `npm start` in your CLI, to generate a bundle using the content of the `./src/index.js` file.

But with the usage of loaders, webpack can extend the functionality of the require function to load almost any file type and syntax. If you uncomment and replace the existing content the following code in `./src/index.js` file, you'll  convert the node module to an [ECMAScript2015 (ES6)](http://www.ecma-international.org/ecma-262/6.0/) module:

```javascript
export function helloWorld() {
	return console.log('This is the index page');
}
```
You should notice the difference on hitting `npm start` again, since the code generated will be pre-processed by the babel-loader, a [Babel](http://babeljs.io/) wrapper to transpile ES6 to ES5.

Also notice the `include` property specified over the `babel-loader` configuration. This is important, to make sure that webpack will only take care of the application scripts and ignore others, such as the `node_modules` directory.

There are webpack loaders for almost any kind of files and languages in the wild: SCSS, LESS, CoffeeScript, ReactJS, images and so on. 
