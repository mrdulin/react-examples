/**
 * Created by dulin on 17/1/19.
 */
const webpack = require('webpack');
const path = require('path');

const join = (...args) => path.join.apply(null, [process.cwd(), ...args]);
const env = process.env.NODE_ENV === 'production' ? 'production' : 'development';

console.log('===================================================');
console.log('[Webpack build environment] :' + JSON.stringify(env));
console.log('===================================================');

const loaders = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    query: {
      presets: ['es2015', 'react']
    }
  }
];

const resolve = {
  modulesDirectories: ['client', 'common', 'node_modules'],
  alias: {
    root: join(''),
    common: join('common')
  }
};

const pathinfo = env === 'development';
const clientDist = join('dist/client');
const devtool = 'source-map';

module.exports = {
  loaders,
  resolve,
  pathinfo,
  clientDist,
  devtool
};

