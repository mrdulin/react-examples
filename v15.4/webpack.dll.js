const path = require("path");
const webpack = require("webpack");
const AssetsPlugin = require('assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const env = process.env.NODE_ENV === 'production' ? 'production' : 'development';

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
      // 开发依赖
      // 'redux-logger',
      // 'react-addons-Perf',

      'react-addons-css-transition-group',
      'material-ui',
      'jQuery',
      'whatwg-fetch',
      'velocity-animate',
      'react-tap-event-plugin',
      'redux-actions',
      'classnames',
      'redux-promise-middleware'

      // babel-loader使用了transform-runtime插件，会自动添加polyfill
      // 因此没必要使用以下两个
      // 'es6-promise',
      // 'babel-polyfill'
    ]
  },
  output: {
    path: path.join(__dirname, 'dll'),
    filename: "[name]-[hash].js",
    library: "[name]",
    pathinfo: env === 'development'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(env)
      }
    }),
    new AssetsPlugin({
      filename: 'assets.json',
      path: path.join(__dirname, 'dll'),
      prettyPrint: true
    }),
    new webpack.DllPlugin({
      path: path.join(__dirname, "dll", "[name]-manifest.json"),
      /**
       * 这里的name写成'[name].js'，会报错
       * https://github.com/webpack/webpack/issues/3975
       */
      name: "[name]",
      /**
       * 上下文和DllReferencePlugin保持一致
       */
      context: __dirname
    }),
    new CleanWebpackPlugin('dll', {
      root: __dirname,
      verbose: true,
      dry: false
    })
  ].concat(env === 'production' ? [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ] : []),
  resolve: {
    root: __dirname,
    modulesDirectories: ["node_modules"]
  }
};


