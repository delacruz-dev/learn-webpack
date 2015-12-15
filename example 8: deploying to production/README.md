# Example 8: Deploying to production
We don't want to have the same configuration for development and production environments, so there are some changes we would like to do to improve our config file.

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