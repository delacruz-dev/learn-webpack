# Using loaders
Webpack works extending the behavior of the `require()` function in Node.JS. That's why by default it can load any javascript module written in [CommonJS](http://www.commonjs.org/), the Node.JS module system.

With the usage of loaders, webpack can extend the functionality of the `require()` function to load almost any file type and syntax or, in case you need it, to [create your own loaders](https://webpack.github.io/docs/how-to-write-a-loader.html).

## Modules in ECMAScript 2015
In this example you will find a module under the `./src` folder written in [ECMAScript2015 (ES6)](http://www.ecma-international.org/ecma-262/6.0/), the latest version of the JavaScript language standard.
```javascript
export default class HelloWorld {
  salute = () => {
    return console.log('Hello World!');
  }
}
```
ES6 uses its own module creation and importing system, as well as a syntax that not every browser is able to understand. The same for other language that compile to JavaScript, as CoffeeScript or Typscript, as well.

But with the usage of Webpack and the help of an specific loader to understand the new syntax, we can work with our preferred language and yet ensure backwards compatibility most of the browsers and clients.

## How does the Babel loader work
In this example we are using the [`babel-loader`](https://github.com/babel/babel-loader), a [Babel](http://babeljs.io/) wrapper to [transpile](https://en.wikipedia.org/wiki/Source-to-source_compiler) ES6 to ES5.

You will find a new section in the `webpack.config.js` file, the `modules` section. This is the place to include the `loaders` and their configurations. Let's inspect the Babel loader's configuration:
```javascript
module: {
  loaders: [{
    test: /\.js$/,
    include: __dirname + '/src',
    loader: 'babel'
  }]
},
```
Loaders are passed as an array of configuration objects, with the following available properties:

- `test`: A regular expressions to match the file extensions where the loader will trigger
- `include`: The folders to include in the matching rule. If a folder is not included in a loader, it will not trigger in any of its file, no matter that it matches the file extension. Also, if no folders are included, any folder triggers the rule. 
  - By analogy, there is also the possibility to add a `exclude` entry with the opposing behavior. This is useful if you only whant to exclude folders as `node_modules`, for instance.
- `loader`: You can pass in a single loader or an array of `loaders` to act one after another. In this case, we are only using babel, to transpile ES6 to ES5.

When you run `npm run dist` in this example, you should notice that the resulting bundle file does not have ES2015 syntax. This is what Babel does.

There are webpack loaders for almost any kind of files and languages in the wild: SCSS, LESS, CoffeeScript, ReactJS, images and so on. We will review some of them in the following examples.
