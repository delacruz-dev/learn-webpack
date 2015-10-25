// var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var webpack = require('webpack');

module.exports = {
  context: __dirname + "/src",
  entry: "./",
  module: {
    loaders: [{
      test: /\.css$/,
      include: [
        __dirname + "/src"
      ],
      loader: "style-loader!css-loader"
    }]
  },
  output: {
      path: __dirname + "/dist",
      filename: "[name].bundle.[hash].js"
  }
};

// module.exports = {
//   context: __dirname + "/src",
//   entry: "./",
//   module: {
//     loaders: [{
//       test: /\.css$/,
//       include: [
//         __dirname + "/src"
//       ],
//       loader: ExtractTextPlugin.extract("style-loader", "css-loader")
//     }]
//   },
//   output: {
//       path: __dirname + "/dist",
//       filename: "[name].bundle.[hash].js"
//   },
//   plugins: [
//     new ExtractTextPlugin("[name].css")
//   ]
// };

// module.exports = {
//   context: __dirname + "/src",
//   entry: "./",
//   module: {
//     loaders: [{
//       test: /\.css$/,
//       include: [
//         __dirname + "/src"
//       ],
//       loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader?browsers=last 10 version")
//     }]
//   },
//   output: {
//       path: __dirname + "/dist",
//       filename: "[name].bundle.[hash].js"
//   },
//   plugins: [
//     new ExtractTextPlugin("[name].css"),
//     new webpack.optimize.UglifyJsPlugin({
//       compress: {
//         warnings: false
//       }
//     })
//   ]
// };