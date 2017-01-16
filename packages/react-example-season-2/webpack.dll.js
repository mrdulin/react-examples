const path = require("path");
const webpack = require("webpack");
const AssetsPlugin = require('assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const env = process.env.NODE_ENV === 'production' ? 'production' : 'development';

console.log('========================================================');
console.log('WEBPACK NODE_ENV :: ', JSON.stringify(env));
console.log('========================================================');

module.exports = {
    entry: {
        /**
         * throw new Error("DllPlugin: supply an Array as entry");
         * dll的vendor必须是数组的形式
         */
        vendor: [
            'react',
            'react-dom',
            'react-router',
            'redux',
            'react-redux',
            'react-addons-css-transition-group',
            'material-ui',
            'hammerjs',
            'jQuery',
            'whatwg-fetch',
            'es6-promise',
            'velocity-animate',
            'react-tap-event-plugin'
        ]
    },
    output: {
        path: path.join(__dirname, 'dll'),
        filename: "[name]-[hash:8].js",
        library: "[name]"
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(env)
            }
        }),
        new AssetsPlugin({
            filename: 'dll/assets.json',
            prettyPrint: true
        }),
        new webpack.DllPlugin({
            path: path.join(__dirname, "dll", "[name]-manifest.json"),
            name: "[name].js",
            context: __dirname
        }),
         new CleanWebpackPlugin('dll', {
            root: __dirname,
            verbose: true,
            dry: false
        })
    ],
    resolve: {
        root: __dirname,
        modulesDirectories: ["node_modules"]
    }
};


