module.exports = {
  context: "./src",
  entry: {
    home: "./home",
    user: ["./user", "./account"]
  },
  output: {
      path: "./dist",
      filename: "[name].bundle.[hash].js"
  }
};
