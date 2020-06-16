const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./server.js",
  plugins: [new CleanWebpackPlugin()],
};
