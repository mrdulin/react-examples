const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
    entry: __dirname + '/src/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.[hash].js'
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /(node_modules|bower_components)/, loaders: ['react-hot', 'babel']},
            {test: /\.json$/, loaders: ['json']},
            {test: /\.scss$/, exclude: /(node_modules|bower_components)/, loader: ExtractTextPlugin.extract(
                    'style', // The backup style loader
                    'css?sourceMap!postcss!sass?sourceMap'
                )
            }
        ]
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
        new FaviconsWebpackPlugin(__dirname + '/favicon.png'),
        new CleanWebpackPlugin(['dist', 'build'], {
            root: __dirname,
            verbose: true,
            dry: false
        }),
        new HtmlWebpackPlugin({
            title: 'React Weather',
            hash: true
        }),
        new ExtractTextPlugin('style.[hash].css', {
          allChunks: true
        }),
        new webpack.BannerPlugin("Copyright Novaline"),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            }
        })
    ]
};
