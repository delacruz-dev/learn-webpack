# Working with styles

In this scenario we'll set up a working environment for dealing with styles. It contains an `index.js` file with a dependency of the application stylesheet, located in the `index.css` file under the same directory. This requirement wouldn't be possible if it weren't for the loaded configured in the `webpack.config.js` file, at the root of this example.

We've installed two `npm` dependencies for dealing with styles: `style-loader` and `css-loader`. These packages act intercepting the `.css` files required by your modules and extracting their styles into the generated bundle. The only thing you have to do for using them is configure them in the `loaders` section of your `webpack.config.js`. 

## Generate css files as a separated bundle

But maybe you don't want your styles bundled within your javascript bundle (or maybe yes :smile:). In that case, you need to install the `extract-text-webpack-plugin` (already included in the `package.json`). This plugin, used as a loader, works extracting the css styles in the generated bundle into a pure `.css` bundle. To try it out, locate uncomment the lines in the `webpack.config.js`:

```javascript
var ExtractTextPlugin = require('extract-text-webpack-plugin');
...
loader: ExtractTextPlugin.extract("style-loader", "css-loader")
...
plugins: [
  new ExtractTextPlugin("[name].css")
...
]
```
If you hit `npm run dist` now, it will generate two separate files: one with pure javascript an another one with your styles.

## manipulate styles

But let's say you would like to apply some automatic modifications to your styles, like for instance, using [autoprefixer](https://github.com/postcss/autoprefixer). In this case, we can use another loader, the [autoprefixer-loader](https://github.com/passy/autoprefixer-loader), also included in the `package.json`. To try it out, replace the following line in the `webpack.config.js` file with the following one, and uncomment it:

```javascript

loader: ExtractTextPlugin.extract("style-loader", "css-loader") // Remove this
loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader?browsers=last 10 version") // Uncomment this
```
Also, in the `./src/index.css` file, uncomment the `.example` block. 
```css
.example {
    display: flex;
    transition: all .5s;
    user-select: none;
    background: linear-gradient(to bottom, white, black);
```

When you hit `npm run dist`, you should notice that in the css bundle the autoprefixer loader has added browser-specific prefixes to some of the styles.

## Minification

One more thing: The generated styles and JS bundles are not minified, and this is for sure one thing you may want to include in your application before releasing it to production. For minification, webpack includes an `UglifyPlugin`, which can be configured in the `plugins` section of your config file. We've already included a sample configuration, so just uncomment the following lines in the `webpack.config.js`:

```javascript
var webpack = require('webpack');
...
, new webpack.optimize.UglifyJsPlugin({
       compress: {
         warnings: false
       }
     })
```

Finally, hit `npm run dist` again and see what happens to your generated bundle sizes and code.

## Conclusion
Plugins and loaders can easily be configured and used together, joining forces to optimize your workflow and doing the hard work for you.
