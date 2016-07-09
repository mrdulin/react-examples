const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const clearWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

const dist = path.resolve(__dirname, 'dist');
const src = path.resolve(__dirname, 'src');

const __PROD__ = process.env.NODE_ENV === 'production';
const __DEV__ = __PROD__ === false;

const config = {
    entry: {
        app: src + '/index.js'
    },

    output: {
        path: dist,
        filename: '[name].[hash].js'
    },

    module: {
        loaders: [{
            test: /\.(js|jsx)?$/,
            include: [
                src
            ],
            loaders: ['react-hot', 'babel']
        }]
    },

    resolve: {
        extensions: ['', '.js', '.jsx', '.scss', '.sass', '.css', '.json']
    },

    devtool: __DEV__ ? 'source-map' : false,

    plugins: [
        new HtmlWebpackPlugin({
            template: src + '/index.html',
            filename: 'index.html'
        }),
        new webpack.DefinePlugin({
            __DEV__: __DEV__,
            __PROD__: __PROD__
        })
    ]
};

if (__DEV__) {
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
    config.devServer = {
        contentBase: dist,
        historyApiFallback: true,
        hot: true,
        colors: true,
        port: 3001,
        inline: true
    };
}

if (__PROD__) {
    config.plugins.push(new clearWebpackPlugin(['dist', 'build'], {
        root: __dirname,
        verbose: true,
        dry: false
    }));
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }))
    config.plugins.push(new webpack.optimize.DedupePlugin());
    config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
}


module.exports = config;