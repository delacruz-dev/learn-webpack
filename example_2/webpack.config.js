module.exports = {
  context: __dirname + "/src",
  entry: {
    home: "./home",
    user: ["./user", "./account"]
  },
  output: {
      path: __dirname + "/dist",
      filename: "[name].bundle.[hash].js"
  }
};
