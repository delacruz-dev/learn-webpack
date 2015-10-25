var path = require("path");
var webpack = require("webpack");

module.exports = {
  context: __dirname + "/src",
  entry: {
    app: "./",
    vendor: ["jquery", "underscore"],
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(
        /* chunkName= */"vendor", 
        /* filename= */"vendor.bundle.js"
    )
  ]
};