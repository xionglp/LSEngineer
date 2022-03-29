
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")

module.exports = {
  mode: "development",
  devServer: {
    hot: true,
    // open: true,
    // host: "0.0.0.0",
    // port: "9000",
    compress: true,
    proxy: {
      "/api": {
        target: "http://localhost:8888",
        pathRewrite: {
          "^/api": ""
        },
        secure: false,
        changeOrigin: true
      }
    },
    historyApiFallback: true 
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
  ]
}