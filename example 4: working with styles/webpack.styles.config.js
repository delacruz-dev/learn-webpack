module.exports = {
  context: __dirname + '/src',
  entry: './',
  module: {
    loaders: [{
      test: /\.css$/,
      include: [
        __dirname + '/src'
      ],
      loader: 'style-loader!css-loader'
    }]
  },
  output: {
      path: __dirname + '/dist',
      filename: '[name].bundle.[hash].js'
  }
}