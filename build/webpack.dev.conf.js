const path = require("path");
const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.conf");

module.exports = merge(baseWebpackConfig, {
  entry: {
    index: "./example/src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "../example/dist"),
    publicPath: "example/dist/",
    filename: "[name].js"
  },
  devServer: {
    contentBase: "./",
    compress: true,
    port: 2345,
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: false,
      version: false,
      warnings: true,
      colors: {
        green: "\u001b[32m"
      }
    }
  }
});
