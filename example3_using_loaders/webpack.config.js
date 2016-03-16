module.exports = {
  entry: __dirname + '/src',
  module: {
    loaders: [{
      test: /\.js$/,
      include: __dirname + '/src',
      loader: 'babel'
    }]
  },
  output: {
    path: './dist',
    filename: 'bundle.js'
  }
};
