const presets = [
  ["@babel/preset-env"],
  ["@babel/preset-react"]
]
const plugins = []

const isDevelopment = process.env.NODE_ENV === "development";

if (isDevelopment) {
  plugins.push(["react-refresh/babel"])
}

module.exports = {
  presets: presets,
  plugins: plugins
}