var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname + '/src',
  entry: './',
  module: {
    loaders: [{
      test: /\.css$/,
      include: [
        __dirname + '/src'
      ],
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
    }]
  },
  output: {
      path: __dirname + '/dist',
      filename: '[name].bundle.[hash].js'
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ]
};
