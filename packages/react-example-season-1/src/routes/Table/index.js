export default {
    path: 'table',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            //注意,有getComponent和getComponents两种方法,使用getComponent方法, cb的第二个参数不是数组
            //页面中使用的组件不需要require（异步加载）,只需要在页面文件中按照相对路径import即可
            //使用require(..).default是因为该模块使用的es6的export default方法导出模块
            //有两种方法可以不用写default，一是模块通过module.exports导出，二是安装babel-plugin-add-module-exports插件，在.babelrc的plugins中添加"add-module-exports"(这种方式可加default，也可以不加)

            cb(null, require('./components/Table.react')
                // require('./components/tableES5'),
                // require('./components/tableES6').default,
                // require('./components/TableES6WithES7StaticProps').default
            )
        })
    }
}