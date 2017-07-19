import * as webpack from 'webpack';
import * as path from 'path';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import webpackCommonConfig from './webpack.common';
import * as Merge from 'webpack-merge';
declare const __dirname: string;

const PORT: number = 2222;
const publicPath: string = '/';

const config: webpack.Configuration = Merge(webpackCommonConfig, {

  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'scripts/[name].bundle.js',
    pathinfo: true,
    publicPath,
    sourceMapFilename: '[name].map'
  },

  devtool: 'source-map',

  devServer: {
    port: PORT,
    host: '0.0.0.0',
    historyApiFallback: false,
    noInfo: false,
    stats: 'minimal',
    publicPath,
    proxy: {
      "/clearbit/api": {
        target: "https://autocomplete.clearbit.com",
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          "^/clearbit/api": "/v1/companies/suggest"
        }
      }
    }
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]

});

export default config;
