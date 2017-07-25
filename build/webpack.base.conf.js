const webpack = require("webpack");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["es2015", "stage-0"]
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
  performance: {
    hints: false
  },
  resolve: {
    extensions: [".webpack.js", ".js", ".vue", ".ts"]
  },
  plugins: [new webpack.optimize.ModuleConcatenationPlugin()]
};
