const webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
          }
        ]
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/env"]
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        use: ["vue-loader"]
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
        parallel: 4,
        uglifyOptions: {
          warnings: false,
          compress: {
            warnings: false
          },
        },
      })
    ]
  },
  performance: {
    hints: false
  },
  resolve: {
    extensions: [".webpack.js", ".js", ".vue", ".ts"]
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new VueLoaderPlugin()
  ]
};
