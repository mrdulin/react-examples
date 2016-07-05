# A React Weather Application

_技术栈:_

`webpack` + `react` + `es6+`，详见`package.json`

_环境:_

*	`npm`版本`3.8.9`
*	`node`版本`v6.2.0`

_说明:_

*	`npm start`开发
*	`npm run build`生产

_TODO LIST_

* [ ] `webpack`中`require.context`使用
* [ ] `webpack`中`require.ensure`使用
* [ ] `webpack`配置的路径问题(自身，loader, plugin)


_说明: _

* `webpack`本地安装，其命令行工具在`node_modules/.bin`目录下，在`package.json`文件的`script`字段中，不用写

```json
...
"script": {
	"build": "node_modules/.bin/webpack"
}
...
```


`npm`会将`node_modules/.bin`目录加入，所以可以直接写

```json
...
"script": {
	"build": "webpack"
}
...
```



