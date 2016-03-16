var path = require('path');
var webpack = require('webpack');

var APP_PATH = path.join(__dirname, '/src');

module.exports = {
  context: APP_PATH,
  entry: './',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: 'http://localhost:3000/dist'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: APP_PATH
      }
    ]
  },
  devServer: {
    port: 3000,
    stats: { colors: true },
    inline: true,
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};