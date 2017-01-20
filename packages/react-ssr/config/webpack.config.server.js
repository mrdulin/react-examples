/**
 * Created by dulin on 17/1/20.
 */
const nodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.config.base');

const config = {
    entry: {
        server: join('server/index.js'),
    },
    output: {
        path: join('dist'),
        filename: '[name].js',
        pathinfo: baseConfig.pathinfo
    },
    devtool: baseConfig.devtool,
    resolve: baseConfig.resolve,
    module: {
        loaders: [

        ].concat(baseConfig.loaders)
    },
    /**
     * target: 'node'目的是编译打包时忽略nodejs的内置模块，例如fs,path
     */
    target: 'node',
    /**
     * externals 指定不要打包的模块，nodejs服务器端不需要打包其require的模块(node_modules)
     */
    externals: [nodeExternals()],
    plugins: [
        new webpack.BannerPlugin(`require('source-map-support').install();`, {
            raw: true,
            entryOnly: false
        })
    ]
};

module.exports = config;