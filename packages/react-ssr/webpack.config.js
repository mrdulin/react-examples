/**
 * Created by dulin on 17/1/19.
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: `${__dirname}/src/index.html`,
    filename: 'index.html',
    inject: 'body',
});

const config = {
    entry: {
        app: path.join(__dirname, 'client/index.js'),
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'name-[chunkhash:8].js',
        pathinfo: true
    },
    module: {
        // preLoaders: [
        //     {
        //         test: /\.jsx$|\.js$/,
        //         loader: 'eslint-loader',
        //         include: `${__dirname}/src`,
        //         exclude: /bundle\.js$/
        //     }
        // ],
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },

    devServer: {
        inline: true,
        port: 8008
    },
    plugins: [HTMLWebpackPluginConfig]

};

module.exports = config;

