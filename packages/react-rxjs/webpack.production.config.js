const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const WebpackBrowserPlugin = require('webpack-browser-plugin');

const src = __dirname + '/src/';
const dist = __dirname + '/dist/';

module.exports = {
    entry: {
        app: src + 'app.js',
        lib: src + 'lib.js'
    },
    output: {
        path: dist,
        filename: 'scripts/[name].[hash].js'
    },
    devtool: "source-map",
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            include: src,
            loaders: ['react-hot', 'babel']
        }, {
            test: /\.json$/,
            loaders: ['json']
        }, {
            test: /\.scss$/,
            exclude: /(node_modules|bower_components)/,
            loader: ExtractTextPlugin.extract(
                'style',
                'css?sourceMap!postcss!sass?sourceMap', {
                    publicPath: '../'
                }
            )
        }, {
            test: /\.(png|jpg|jpeg|gif|)$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'url-loader',
            query: {
                name: './images/[name].[ext]?[hash]',
                limit: 8192
            }
        }, {
            test: /\.(woff|eot|svg|ttf|woff2|otf)\??.*$/,
            exclude: /(node_modules|bower_components)/,
            include: src + 'common/fonts',
            loader: 'url',
            query: {
                name: './fonts/[name].[ext]',
                limit: 8192
            }
        }]
    },
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.json', '.jsx', '.scss', '.sass'],
        alias: {
            commonScript: __dirname + '/src/common/js',
            commonStyle: __dirname + '/src/common/scss'
        }
    },
    //解决import scss文件时相对路径的问题
    sassLoader: {
        //相对于webpack.config.js文件的路径
        includePaths: [path.resolve(__dirname, '/src')]
    },
    postcss: [
        require('autoprefixer')
    ],
    plugins: [
        //不要在生产环境使用，因为该插件会在页面中插入browser-sync-client.js文件（调试用）
        //这里只是用做编译成功后快速预览用
        new WebpackBrowserPlugin({
            port: 8080,
            browser: 'default'
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new FaviconsWebpackPlugin({
            logo: __dirname + '/favicon.png',
            prefix: 'favicons-[hash]/',
            emitStats: true,
            inject: true,
            persistentCache: true,
        }),
        new CleanWebpackPlugin(['dist', 'build'], {
            root: __dirname,
            verbose: true,
            dry: false
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'scripts/commons.[hash].js'
        }),
        new HtmlWebpackPlugin({
            template: src + 'index.html',
            filename: 'index.html',
            hash: true
        }),
        new ExtractTextPlugin('styles/style.[hash].css', {
            allChunks: true
        }),
        new webpack.BannerPlugin("Copyright Novaline"),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            compress: {
                warnings: false,
                dead_code: true,
                drop_debugger: true,
                unused: true,
                drop_console: true
            },
            mangle: {
                //avoid mangling the Webpack runtime.
                except: ['webpackJsonp']
            },
            output: {
                comments: false
            }
        })
    ]
};