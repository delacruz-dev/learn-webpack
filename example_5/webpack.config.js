var path = require("path");
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    context: __dirname + "/src",
    entry: {
        A: "./a",
        B: "./b",
        C: "./c",
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            { test: /\.png$/, loader: "file-loader" }
        ]
    },
    plugins: [
        new CommonsChunkPlugin("commons", "commons.js", ["A", "B"]),
        new ExtractTextPlugin("[name].css"),
    ]
};