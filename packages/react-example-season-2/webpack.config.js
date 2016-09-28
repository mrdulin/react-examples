const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const clearWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const dist = path.resolve(__dirname, 'dist');
const src = path.resolve(__dirname, 'src');

const __PROD__ = process.env.NODE_ENV === 'production';
const __DEV__ = __PROD__ === false;

const config = {
    port: 3002,
    entry: {
        app: src + '/index.js'
    },

    output: {
        path: dist,
        filename: '[name].[hash].js',
        chunkFilename: '[id].chunk.js',
        //publicPath的路径将被加载chunkFile的前面，例如http://localhost:8080/{publicPath}/6.chunk.js
        publicPath: '/'
    },

    debug: __DEV__,

    module: {
        noParse: [],
        loaders: [{
            test: /\.(js|jsx)?$/,
            exclude: /(node_modules|bower_components)/,
            include: [
                src
            ],
            loader: 'babel'
        }, {
            test: /\.(scss|sass)$/,
            include: src,
            loader: ExtractTextPlugin.extract('style', 'css?sourceMap!sass?sourceMap')
        }]
    },

    resolve: {
        root: __dirname,
        extensions: ['', '.js', '.jsx', '.scss', '.sass', '.css', '.json'],
        alias: {
          
        }
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
        }),
        new ExtractTextPlugin('[name].css', {
            allChunks: true
        }),
        new webpack.ProvidePlugin({
            util: src + '/util'
        })
    ]
};

if (__DEV__) {
    config.devServer = {
        contentBase: dist,
        historyApiFallback: true,
        colors: true,
        port: config.port,
        proxy: {
            '/api/**': {
                target: 'http://apis.juhe.cn',
                secure: false,
                changeOrigin: true,
                // bypass: (req, res, opt) => {
                   // console.log('------------------------>>>>>>>>>>>' + req.path);
                    
                //     if (req.headers.accept.indexOf('html') !== -1) {
                //         return dist + '/index.html';
                //     }
                // },

                //webpack-dev-server <=1.14.1版本是rewrite不是pathRewrite
                rewrite: (req, opts) => {
                    req.url = req.url.replace(/^\/api(.+)$/, '$1');
                }
            }
        }
    };
}

if (__PROD__) {
    config.plugins.push(
        new clearWebpackPlugin(['dist', 'build'], {
            root: __dirname,
            verbose: true,
            dry: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.CommonsChunkPlugin("commons", "commons.js"),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin()
    );
}

module.exports = config;
