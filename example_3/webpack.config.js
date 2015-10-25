module.exports = {
  context: __dirname + "/src",
  entry: "./",
  module: {
    loaders: [{
      test: /\.js$/,
      include: [
        __dirname + "/src"
      ],
      loader: "babel-loader"
    }]
  },
  output: {
      path: __dirname + "/dist",
      filename: "[name].bundle.[hash].js"
  }
};
