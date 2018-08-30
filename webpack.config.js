const path = require("path");

module.exports = {
  // 入口
  entry: ["react-hot-loader/patch", path.join(__dirname, "src/index.js")],

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        // 标识应该被对应loader进行转换的文件
        test: /\.(js|jsx)$/,
        // 指定loader
        use: "babel-loader"
      }
    ]
  },
  resolve: {
    alias: {
      pages: path.join(__dirname, "src/pages"),
      component: path.join(__dirname, "src/component"),
      router: path.join(__dirname, "src/router"),
      actions: path.join(__dirname, "src/redux/actions"),
      reducers: path.join(__dirname, "src/redux/reducers")
    }
  },
  devServer: {
    contentBase: path.join(__dirname, "./dist"),
    port: 8080,
    historyApiFallback: true,
    host: "0.0.0.0"
  }
};
