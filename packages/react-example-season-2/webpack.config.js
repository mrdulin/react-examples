const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ClearWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin');
const pkg = require('./package.json');

const __PROD__ = process.env.NODE_ENV === 'production';
const __DEV__ = __PROD__ === false;

const dist = path.resolve(__dirname, __PROD__ ? 'docs' : 'dist');
const src = path.resolve(__dirname, 'src');

const nodeServerHost = 'http://localhost:3003';

const config = {
    /**
     * webpack 自身就有 cache 的配置，并且在 watch 模式下自动开启，虽然效果不是最明显的，但却对所有的 module 都有效。
     */
    cache: __DEV__,

    entry: {
        app: [
            src + '/index.js',
            src + '/scss/',
        ],
        vendor: [
            'react',
            'react-dom',
            'react-router',
            'redux',
            'react-redux',
            'react-tap-event-plugin',
            'react-addons-css-transition-group',
            'material-ui',
            'whatwg-fetch'
        ]
    },

    output: {
        path: dist,
        filename: '[name].[hash].js',
        chunkFilename: '[id].chunk.js',
        publicPath: __DEV__ ? '/' : 'http://novaline.space/react-juhe-tools/',
        pathinfo: __DEV__,
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
            loader: 'babel',
            query: {
                /**
                 * babel-loader 可以利用系统的临时文件夹缓存经过 babel 处理好的模块，对于 rebuild js 有着非常大的性能提升。
                 */
                cacheDirectory: __DEV__
            }
        }, {
            test: /\.(scss|sass)$/,
            include: src,
            loader: ExtractTextPlugin.extract('style', 'css?sourceMap!sass?sourceMap')
        }]
    },

    resolve: {
        root: src,
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.jsx', '.scss', '.sass', '.css', '.json'],
        alias: {}
    },

    /**
     * 使用何种sourceMap
     * https://github.com/webpack/docs/wiki/configuration#devtool
     */
    devtool: __DEV__ ? 'cheap-source-map' : false,

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
                NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
            }
        }),
        new ExtractTextPlugin('[name].[contentHash].css', {
            allChunks: true
        }),
        new webpack.ProvidePlugin({
            util: path.join(src, 'util.js'),
            API: path.join(src, 'api.js'),
            React: 'react',
            ReactDOM: 'react-dom'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js',
            minChunks: Infinity
        }),
        // new webpack.DllReferencePlugin({
        //     context: path.join(__dirname, "src"),
        //     manifest: require("./dll/vendor-manifest.json")
        // }),
       
        new FaviconsWebpackPlugin(path.resolve(__dirname, 'src/favicon.png'))
    ]
};

function setProxy(pathTargets) {
    const proxy = {};
    const baseConfig = {
        secure: false,
        changeOrigin: true,
        // bypass: (req, res, opt) => {
        //     if (req.headers.accept.indexOf('html') !== -1) {
        //         return 'index.html';
        //     }
        // },

        //webpack-dev-server <=1.14.1版本是rewrite不是pathRewrite    
        // rewrite: (req, opts) => {
        //     req.url = req.url.replace(/^\/api(.+)$/, '$1');
        // }

        pathRewrite: {'^/api' : ''}
        
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

    config.devServer = {
        contentBase: dist,
        historyApiFallback: true,
        colors: true,
        port: 3000,
        hot: true,
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
        new webpack.optimize.OccurrenceOrderPlugin(),
        new ClearWebpackPlugin(['dist', 'docs', 'build'], {
            root: __dirname,
            verbose: true,
            dry: false
        })
    );
}

module.exports = config;
