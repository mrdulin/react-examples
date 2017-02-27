*   v2.0.4
1.  优化`webpack`打包, 添加模块入口文件生成脚本genEntry.js, 提取公共资源和模块到`common.js`
2.  优化`webpack`打包，将打包时的在控制台输出的环境信息封装成`webpack plugin`
3.  给通过`require.ensure`创建分离点的所有模块添加`chunkName`, 便于观察和查找`chunk`文件

*   v1.0.5
1. 添加全局reducer
2. 添加CHANGELOG.md
