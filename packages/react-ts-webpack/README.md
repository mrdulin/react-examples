# react-ts-webpack2 脚手架

## 技术栈:

见`package.json`

## 环境依赖：

* System: `Mac OSX`
* `nodejs`: `v8.4.0`
* `npm`: `5.3.0`

## 发布流程

* `git`提交代码
* `npm version patch`更新版本号
* `npm run build`
* 再次提交`docs`目录到`github`

##遇到的问题：

* `Cannot use [chunkhash] for chunk in '[name].[chunkhash].js' (use [hash] instead)`

* `typescript` + `webpack2`中开启`css-loader`的`css module`, `import style from 'style.module.scss'`，`tsc`报错问题。参考：

   * https://medium.com/@sapegin/css-modules-with-typescript-and-webpack-6b221ebe5f10
   * https://github.com/css-modules/css-modules/issues/61#issuecomment-220684795

* `Error:(15, 21) TS2302:Static members cannot reference class type parameters.`

* 什么时候定义`interface`，什么时候定义`class`，什么时候定义`type`。 - _已解决_

* `es6`箭头函数形式的高阶函数，函数返回值`ts`类型注解写法。 - _已解决_

* 怎么使用`yarn`或`npm`来搜索一个`package`，按照前先验证这个`package`是否存在，或者是否是需要的那个`package`（排除`package`名字相近的）?

  * `yarn info package`， 例如`yarn info autoprefixer description`,获取`autoprefixer`的描述信息
  * `yarn info package readme`，获取`package`的`readme`文件

* [npm scripts 使用指南](http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html)
* `jest`写`react`组件快照测试时，组件使用的`css module`报错，参考链接: https://github.com/facebook/jest/issues/1347

## 思考

* 展示型组件(推荐使用`stateless functional component`写法)，使用`react-test-renderer/shallow`浅渲染测试组件DOM结构即可。
  [参考](http://reactkungfu.com/2015/07/approaches-to-testing-react-components-an-overview/)
* 基于类的组件，内部包含`state`，`props`，通过用户事件，程序事件可以改变组件UI状态，使用`react-dom/test-utils`进行测试，通过触发事件，断言改变的UI状态。
* 到组件嵌套层次较深时，使用`shallow`
