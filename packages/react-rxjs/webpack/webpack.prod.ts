import * as webpack from 'webpack';
import * as path from 'path';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import webpackCommonConfig from './webpack.common';
import * as Merge from 'webpack-merge';
declare const __dirname: string;

const config: webpack.Configuration = Merge(webpackCommonConfig, {

  output: {
    path: path.resolve(__dirname, '../docs'),
    filename: 'scripts/[name].[hash:16].js',
    publicPath: '/'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    })
  ]
});

export default config;
