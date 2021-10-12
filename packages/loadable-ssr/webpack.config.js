const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const DIST_PATH = path.resolve(__dirname, 'dist');
const production = process.env.NODE_ENV === 'production';
const development = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

const getConfig = (target) => ({
  name: target,
  target,
  entry: path.resolve(__dirname, `./src/client/index.${target}`),
  output: {
    path: path.join(DIST_PATH, target),
    filename: production ? '[name]-bundle-[chunkhash:8].js' : '[name].js',
    publicPath: `/dist/${target}/`,
    libraryTarget: target === 'node' ? 'commonjs2' : undefined,
  },
  mode: development ? 'development' : 'production',
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, './src/client/index.html'),
    // }),
    new LoadablePlugin(),
    new MiniCssExtractPlugin(),
  ],
  // devServer: {
  //   static: {
  //     directory: path.join(__dirname, 'dist/web'),
  //   },
  //   port: 9000,
  // },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  optimization: {
    runtimeChunk: target !== 'node',
  },
  externals: target === 'node' ? ['@loadable/component', nodeExternals()] : undefined,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            caller: { target },
          },
        },
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
    ],
  },
});

module.exports = [getConfig('web'), getConfig('node')];
