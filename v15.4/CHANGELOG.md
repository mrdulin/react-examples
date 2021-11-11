- v2.0.5

1.  解决 Unable to preventDefault inside passive event listener due to target being treated as passive. See https://www.chromestatus.com/features/5093566007214080
    导致的 IScroll 滑动问题

- v2.0.4

1.  优化`webpack`打包, 添加模块入口文件生成脚本 genEntry.js, 提取公共资源和模块到`common.js`
2.  优化`webpack`打包，将打包时的在控制台输出的环境信息封装成`webpack plugin`
3.  给通过`require.ensure`创建分离点的所有模块添加`chunkName`, 便于观察和查找`chunk`文件

- v1.0.5

1. 添加全局 reducer
2. 添加 CHANGELOG.md
