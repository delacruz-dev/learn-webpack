# Setting up a development environment
Another one of the great features that offers the Webpack ecosystem comes when setting up a development environment, using `webpack-dev-server` and its `hot module replacement`.

This tandem allows us to test our developments without releasing into production and with a very simple configuration. While the `webpack-dev-server` creates a local http server for our pages and static assets, `hot module replacement` keeps track of the changes in the sources and re-generates the bundles(s) on the fly. Since the bundles are kept in memory and are not written into disk, all the changes are doing really fast.

## Configuring the webpack dev server
First of all, we've added a new script in our `package.json` to start a local development environment using `webpack-dev-server`. To try it out, hit:
```
$ npm start
```

The Webpack dev server uses the same configuration than the Webpack module bundler by default (although we can provide a different one). The following configuration in our `webpack.config.js` enables the usage of webpack dev server. This is one of the simplest configurations possible, but it is good enough to show its potential.
```javascript
devServer: {
  port: 3000,
  stats: { colors: true },
  inline: true,
  publicPath: '/dist/'
},
```
Every dev server properties are contained under the `devServer` property in the config file. It has the following settings:

- `port`: The port in our localhost where the server will start. In the example, we'll be able to access our server introducing the url [http://localhost:3000](http://localhost:3000) in a browser.
- `stats`: It just makes the output in the terminal more reader friendly. 
- `inline`: Enables the inline mode, allowing you to navigate directly to [http://localhost:3000](http://localhost:3000) to test your app. Otherwise, you would have to access [http://localhost:3000/webpack-dev-server/](http://localhost:3000/webpack-dev-server/) and your app would be displayed in an iframe. Both options are available in `inline` mode.
- `publicPath`: Sets the URI path to access the generated static assets via client browser.

## Configuring the Hot Module Replacement
The hot module replacement works as a plugin for webpack, and as a plugin, we must configure it in its corresponding section of the `webpack.config.js` file.
```javascript
plugins: [
  new webpack.HotModuleReplacementPlugin()
]
```
That's it. There is not more relevant configurations for making it work and starting the magic. It just will watch your files for changes and automatically reload the browser window. Since it is incredibly fast, it boosts your development experience to the top level.
