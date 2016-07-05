const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

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
                'css?sourceMap!postcss!sass?sourceMap',
                {
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
            //不用$正则，因为fontawesome-webfont.eot?v=4.6.3
            test: /\.(woff|eot|svg|ttf|woff2|otf)/,
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
        /* 
        1.如果不指定.json扩展名，require的时候如果不加.json扩展名，会报错，这里指定的扩展名，在require的时候就不需要加扩展名了，直接require('文件名')就可以了
        2.必须指定`''`空字符串，require的时候就可以指定文件自己的扩展名
         ERROR in ./src/pages/Home.react.js
         Module not found: Error: Cannot resolve 'file' or 'directory' ../jsons/city in /Users/dulin/workspace/react-weather/src/pages
         @ ./src/pages/Home.react.js 15:12-36
         */
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
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'scripts/commons.[hash].js'
        }),
        //不要和devServer字段的的hot属性一起使用，会失效，并且会报如下错误：
        //`Uncaught RangeError: Maximum call stack size exceeded`
        // new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: src + 'index.html',
            filename: 'index.html'
        }),
        new ExtractTextPlugin('styles/style.[hash].css', {
            allChunks: true
        })
    ]
};