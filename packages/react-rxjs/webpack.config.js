const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const src = __dirname + '/src/';
const dist = __dirname + '/dist/';

module.exports = {
    entry: {
        app: src + 'app.js',
        lib: src + 'lib.js'
    },
    output: {
        path: dist,
        filename: '[name].[hash].js'
    },
    devtool: "source-map",
    devServer: {
        contentBase: dist,
        port: "8080",
        colors: true,
        historyApiFallback: true,
        inline: true,
        hot: true
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loaders: ['react-hot', 'babel']
        }, {
            test: /\.json$/,
            loaders: ['json']
        }, {
            test: /\.scss$/,
            exclude: /(node_modules|bower_components)/,
            loader: ExtractTextPlugin.extract(
                'style',
                'css?sourceMap!postcss!sass?sourceMap'
            )
        }, {
            test: /\.(png|jpg|jpeg|gif|woff)$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'url-loader',
            query: {
                limit: 8192
            }
        }]
    },
    //解决import scss文件时相对路径的问题
    sassLoader: {
        //相对于webpack.config.js文件的路径
        includePaths: ['/scss']
    },
    postcss: [
        require('autoprefixer')
    ],
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'commons.[hash].js'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: src + 'index.html',
            filename: 'index.html'
        }),
        new ExtractTextPlugin('style.[hash].css', {
            allChunks: true
        })
    ]
};
