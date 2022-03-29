const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  entry: "./src/index.js",
  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, "./dist")
  },
  module: {
    rules: [
      {
        test:/\.less$/,
        use: [
          "style-loader",
          { 
            loader: "css-loader",
            options: {
              importLoaders: 2
            }
          },
          "postcss-loader",
          "less-loader",
        ]
      },
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
        test: /\.vue$/,
        use: [
          { loader: "vue-loader" }
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
    new VueLoaderPlugin(),
  ]
}