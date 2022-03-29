const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  entry: "./src/index.ts",
  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, "./dist")
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            // options: {
            //   presets: ["@babel/preset-env"]
            // }
          },
        ]
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          // { loader: "ts-loader" }
          { loader: "babel-loader" }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(), // 自动清除dist文件夹
    new HtmlWebpackPlugin({
      title: "webpack案例-source-map",
      template: "./index.html"
    }),
  ]
}