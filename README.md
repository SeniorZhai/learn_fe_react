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


### react
`npm install --save react react-dom`

修改`src/index.js`
```js
import React from 'react';
import ReactDom from 'react-dom';
import Hello from './component/Hello';

ReactDom.render(
    <Hello/>, document.getElementById('app'));
```
添加`./component/Hello.js`
```js
import React, {Component} from 'react';

export default class Hello extends Component {
    render() {
        return (
            <div>
                Hello,React!
            </div>
        )
    }
}
```
打包后查看效果

### 启动脚本
在`package.json`中添加
```js
"scripts":{
  "start": "webpack --mode development",
  "build": "webpack -—mode production",
}
```
打包直接执行`npm start`即可

### react-router
安装`npm install --save react-router-dom`
新建`src/roter/roter.js`
```js
import React from 'react'

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Home from '../pages/Home'
import Page1 from '../pages/Page1'

const getRouter = ()=> (
    <Router>
         <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/page1">Page1</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/page1" component={Page1}/>
            </Switch>
        </div>
    </Router>
)

export default getRouter
```
新建`src/pages/Home.js`和`src/pages/Page1`
```js
import React, {Component} from 'react';

export default class Home extends Component {
    render() {
        return (
            <div>
                this is home~
            </div>
        )
    }
}
```

```js
import React, {Component} from 'react';

export default class Page1 extends Component {
    render() {
        return (
            <div>
                this is Page1~
            </div>
        )
    }
}
```
修改`index.js`
```js
import React from 'react';
import ReactDom from 'react-dom';

import getRouter from './router/router';

ReactDom.render(
    getRouter(), document.getElementById('app'));
```
运行`npm start`查看效果