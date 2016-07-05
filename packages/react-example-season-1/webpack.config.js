const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const dist = __dirname + '/dist/';
const src = __dirname + '/src/';

module.exports = {
    entry: [
        app: src + 'index.js'
    ],

    output: {
        path: dist,
        publicPath: '/',
        filename: '[name].[hash].js'
    },

    module: {
        loaders: [{
            test: /\.(js|jsx)?$/,
            exclude: /node_modules/,
            loader: 'react-hot!babel'
        }]
    },

    resolve: {add 
        extensions: ['', '.js', '.jsx']
    },

    devtool: 'source-map',

    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        hot: true,
        colors: true,
        port: 3001,
        inline: true,
        open: true
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: src + 'index.html',
            filename: 'index.html'
        })
    ]
};
