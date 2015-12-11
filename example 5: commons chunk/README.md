# Commons chunk

In the following example we have three modules: `a`, `b` and `c`. Every one of them has its own css style guide and all of them are sharing a base style guide. The only difference is that, while `a` and `b` are requiring the base style sheet directly in the JavaScript module using `require()`, `c` is importing it via css `@import`. 

## The CommonsChunkPlugin
The `webpack.config.js` file has already configured one of the most useful plugins for Webpack: `CommonsChunkPlugin`. It extracts the common content of the provided entry points into a separate bundle, and works with JavaScript, css and other file types, such as images (with the appropiate loader).

We've configured the three entry points for our application:

```javascript
entry: {
  A: './a',
  B: './b',
  C: './c',
}
``
In the `plugins` section, you can find the `CommonsChunkPlugin` configured to extract the common code of `A` and `B` entries, but not `C`:

```javascript
new CommonsChunkPlugin('commons', 'commons.js', ['A', 'B']),
```
Also, we've configured an additional loader, for managing files (such as images):
```javascript
loaders: [{
  test: /\.css$/,
  loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
}, { 
  test: /\.png$/, 
  loader: 'file-loader' 
}]
```
As you can see, loaders can also be provided as an array.

If you type `npm run dist` in your terminal, you should see the power of Webpack in action. It should generate the following files:

- `commons.js`: A file with the common javascript code shared between `A.js` and `B.js` modules.
- `common.css`: The same for the `css` code.
- `A.js`, `B.js` and `C.js`: One bundle is generated for each entry configured in webpack. Notice that, since the C entry is not included in the `CommonsChunkPlugin, it has a significant amount of code compared with the others.
- `A.css`, `B.css` and `C.css`: Once again, the same for the `css` code.
- One png file: there is only one because the Webpack [`file-loader`](https://github.com/webpack/file-loader) calculates the hash of the file for every image file, and the three images in this example are exactly the same :) But it's interesting to see how it replaces the file name in the generated `css` files.

It may be a good idea to play with this example removing the `CommonsChunkPlugin` configuration and comparing the generated bundles with the previous ones.