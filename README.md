## 初始化项目

### webpack
```shell
npm install --save-dev webpack
npm install --save-dev webpack-cli

npm install -g webpack
npm install -g webpack-cli
```

编写配置文件 `touch webpack.config.js`
```js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};
```
编写入口文件 `touch index.js`
```js
document.getElementById('app').innerHTML = "Webpack works"
```
运行`webpack --config webpack.config.js`生成了`./dist/bundle.js`

在`dist`文件夹下编写`touch index.html`
```
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<div id="app"></div>
<script type="text/javascript" src="./bundle.js" charset="utf-8"></script>
</body>
</html>
```
在浏览器中打开`index.html`测试

### Babel
> Babel是一个JS转码工具，能将ES7的转换成低版本可用的代码

```
npm install --save-dev babel-cli babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-0
```

配置babel文件`touch .babelrc`
```
{
   "presets": [
     "es2015",
     "react",
     "stage-0"
   ],
   "plugins": []
 }
```
在`webpack.config.js`中添加
```js
module.exports = {
  //...
  module:{
      rules:[{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader']
      }]
  }
  //...
}
```
修改`src/index.js`
```js
var func = str => {
    document.getElementById("app").innerHTML = str
};
func("Hello Babel!");
```
运行`webpack --config webpack.config.js`
浏览器中打开`index.html`测试
