const path = require('path');

module.exports = {
  // 入口
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module:{
    rules:[{
      // 标识应该被对应loader进行转换的文件
      test: /\.(js|jsx)$/,
      // 指定loader
      use: 'babel-loader'
    }]
  },
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    port: 8080,
    contentBase: path.join(__dirname, './dist'),
    historyApiFallback: true,
    host: '0.0.0.0'
  }
};