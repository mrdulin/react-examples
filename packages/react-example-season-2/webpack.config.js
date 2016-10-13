const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ClearWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackBrowserPlugin = require('webpack-browser-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin');
const pkg = require('./package.json');

const __PROD__ = process.env.NODE_ENV === 'production';
const __DEV__ = __PROD__ === false;

const dist = path.resolve(__dirname, __PROD__ ? 'docs' : 'dist');
const src = path.resolve(__dirname, 'src');

const nodeServerHost = 'http://localhost:3003';


const config = {
    port: 3002,
    entry: {
        app: [
            src + '/index.js',
            src + '/scss/'
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
        publicPath: __DEV__ ? '/' : 'http://novaline.space/react-juhe-tools/'
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
        alias: {}
    },

    devtool: __DEV__ ? 'source-map' : false,

    plugins: [
        new HtmlWebpackPlugin({
            template: src + '/index.html',
            filename: 'index.html',
            title: `聚合工具 v${pkg.version}`
        }),
        new HtmlWebpackPlugin({
            template: src + '/index.html',
            filename: 'home.html',
            title: `聚合工具 v${pkg.version}`
        }),
        new webpack.DefinePlugin({
            __DEV__,
            __PROD__,
            __VERSION__: pkg.version,
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new ExtractTextPlugin('[name].css', {
            allChunks: true
        }),
        new webpack.ProvidePlugin({
            util: src + '/util',
            API: src + '/api',
            React: 'react',
            ReactDOM: 'react-dom'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js',
            minChunks: Infinity
        }),
        new ClearWebpackPlugin(['dist', 'docs', 'build'], {
            root: __dirname,
            verbose: true,
            dry: false
        }),
        new FaviconsWebpackPlugin(path.resolve(__dirname, 'src/favicon.png'))
    ]
};

function setProxy(pathTargets) {
    const proxy = {};
    const baseConfig = {
        secure: false,
        changeOrigin: true,
        bypass: (req, res, opt) => {
            if (req.headers.accept.indexOf('html') !== -1) {
                return dist + '/index.html';
            }
        },

        //webpack-dev-server <=1.14.1版本是rewrite不是pathRewrite    
        rewrite: (req, opts) => {
            req.url = req.url.replace(/^\/api(.+)$/, '$1');
        }
    };

    for (let pathTarget of pathTargets) {
        const {paths, target: targetHost} = pathTarget;
        const {length: len} = paths;
        for(let i = 0; i < len; i++) {
            const target = process.env.NODE_ENV === 'node-server-proxy' ? nodeServerHost : targetHost;
            proxy[paths[i]] = Object.assign({}, baseConfig, {target})
        }
    }

    return proxy;
}


if (__DEV__) {

    config.plugins.push(
        new WebpackBrowserPlugin({
            browser: 'default',
            //port, 默认是8080，但如果webpack-dev-server指定了port，则会使用后者
            // port: 8080
            url: 'http://localhost'
        })
    )

    config.devServer = {
        contentBase: dist,
        historyApiFallback: true,
        colors: true,
        port: config.port,
        proxy: setProxy([
            {
                paths: ['/api/ip/ip2addr', '/api/mobile/get'],
                target: 'http://apis.juhe.cn'
            },
            {
                paths: ['/api/toutiao/index'],
                target: 'http://v.juhe.cn'
            }
        ])
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
