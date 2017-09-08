# search模块

## 该特性模块使用

* `typescript` 
* `isomorphic-fetch` 
* `redux-actions`
* `redux-promise-middleware`

## 测试文件使用

* `typescript`
* `jest`
* `nock`
* `redux-mock-store`

## actions.test.ts文件

有以下几个目的：

* 测试`redux` `action`的流程 
* 该模块主要测试通过`redux-actions` + `redux-promise-middleware`得到的`action`，
* 通过`nock` `mock` `fetch`发出的`HTTP`请求，测试带有`http`请求的`async action`
* 以上都通过`typescript`完成

## 小技巧

* 当通过`nock`模拟`http`请求后，`store.dispatch(actions.search())`，可以在`actions.ts`文件中的
`search` `actionCreator`中的`fetch`回调函数中进行`console.log`模拟的请求结果，以便查看。
