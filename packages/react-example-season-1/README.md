# react-examples

_环境:_

```bash
dulindeiMac:react-examples dulin$ npm -v
2.15.5
```

```bash
dulindeiMac:react-examples dulin$ node -v
v4.4.Â
```

_如何运行:_

1.  `npm install`
2.  `npm run webpack-dev-server`启动服务器，浏览器访问`localhost:8080`（使用Webpack Development Server），或者使用
`express` + `webpack-dev-middleware`，运行`npm start`，浏览器访问`localhost:3000`(暂时不可用，报错)


_说明:_

*   在项目根目录下新建使用`.babelrc`文件配置或者在`package.json`文件中添加`babel`字段进行配置（[文档地址](http://babeljs.io/docs/usage/babelrc/#use-via-package-json)），预设ES2015(ES6)向ES5的转换编译规则

*   `babel-core`模块是`babel`编译器，用来对ES6进行编译转换，提供了一些Node API，注意，`babel-core`只是提供了转换文件的API，不会真正转换ES6语法成ES5（[仓库地址](https://github.com/babel/babel/tree/master/packages/babel-core)）

*   `babel-preset-es2015`模块包含ES2015的所有新特性的转换规则，这才是把ES6文件按照此规则转换编译成ES5的模块（[文档地址](https://babeljs.io/docs/plugins/preset-es2015/)）

*   `babel-preset-react`使用此模块提供的转换规则来对`react`的`JSX`语法进行转换

*   `webpack-dev-middleware`（[地址](https://github.com/webpack/webpack-dev-middleware)）中间件结合`express`使用，用来启动一个http服务器，比起[Webpack Development Server](https://webpack.github.io/docs/webpack-dev-server.html)的优点是，前者不从硬盘上读取文件，而是放在内存中，所以速度要快；前者如果开启文件监视模式，当文件有修改时，中间件将不再使用旧的bundle文件，而是延迟到当所修改的文件编译完成后。包含livereload功能。

*   `webpack-hot-middleware`中间件，Webpack提供了一个强大的特性叫做“模块热载”或者叫“模块热插拔”。__这个特性不会刷新整个页面，而是只刷新修改过的模块的那一部分__

*   `babel-preset-stage-0`模块，将ES7提供的一些特性转换为ES5，常见的就是在`react`中`getDefaultProps`和`propTypes`，详见`table`例子。

*   项目采用ES5+ES6+ES7混写的方式

_出现的问题:_

```bash
dulindeiMac:react-examples dulin$ npm i webpack-dev-middleware express --save-dev
(node:3781) fs: re-evaluating native module sources is not supported. If you are using the graceful-fs module, please update it to a more recent version.
```

原因：据说是因为node 6.x版本有些`package`不支持。所以使用`nvm`或者`n`切换node到`LTS`版本，注意，切换node版本后，`npm`的版本也会相应的切换
