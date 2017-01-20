/**
 * Created by dulin on 17/1/20.
 */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const baseConfig = require('./webpack.config.base');

const config = {
    entry: {
        client: join('client/index.js'),
        lib: [
            'react',
            'react-dom',
            'react-router',
            'redux',
            'react-redux'
        ]
    },
    output: {
        path: baseConfig.clientDist,
        filename: 'bundle.js',
        pathinfo: baseConfig.pathinfo
    },
    devtool: devtool,
    resolve: resolve,
    module: {
        loaders: [

        ].concat(baseConfig.loaders)
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: join('client/index.html'),
            filename: 'index.html',
            inject: 'body'
        }),
        new CleanWebpackPlugin(baseConfig.clientDist),
        new webpack.optimize.CommonsChunkPlugin("lib", "lib-[hash:8].js", Infinity)
    ]
};

if(env === 'development') {
    // clientConfig.devServer = {
    //     inline: true,
    //     port: 3000
    // }
}

module.exports = config;