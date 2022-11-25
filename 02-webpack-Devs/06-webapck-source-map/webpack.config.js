const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "cheap-module-source-map",
  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, "./dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"]
            }
          },
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(), // 自动清除dist文件夹
    new HtmlWebpackPlugin({
      title: "webpack案例-source-map",
    }),
  ]
}