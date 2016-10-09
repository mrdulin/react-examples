const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ClearWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackBrowserPlugin = require('webpack-browser-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

const dist = path.resolve(__dirname, 'dist');
const src = path.resolve(__dirname, 'src');

const __PROD__ = process.env.NODE_ENV === 'production';
const __DEV__ = __PROD__ === false;

const config = {
    port: 3002,
    entry: {
        app: [
            path.resolve(src, 'index.js'),
            path.resolve(src, './scss/')
        ],
        vendor: [
            'react',
            'react-dom',
            'react-router',
            'react-tap-event-plugin',
            'material-ui',
            'whatwg-fetch'
        ]
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
            util: src + '/util',
            API: src + '/api'
        }),
        new WebpackBrowserPlugin({
            browser: 'default',
            //port, 默认是8080，但如果webpack-dev-server指定了port，则会使用后者
            // port: 8080
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js',
            minChunks: Infinity
        }),
        new ClearWebpackPlugin(['dist', 'build'], {
            root: __dirname,
            verbose: true,
            dry: false
        }),
        new FaviconsWebpackPlugin(path.resolve(__dirname, 'src/favicon.png'))
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
                bypass: (req, res, opt) => {
                   console.log('------------------------>>>>>>>>>>>' + req.path);
                    
                    if (req.headers.accept.indexOf('html') !== -1) {
                        return dist + '/index.html';
                    }
                },

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
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin()
    );
}

module.exports = config;
