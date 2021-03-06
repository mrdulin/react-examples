const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const pkg = require('./package.json');
const EnvReporter = require('./plugins/envReporter');
const genEntry = require('./genEntry');

const __PROD__ = process.env.NODE_ENV === 'production';
const __DEV__ = __PROD__ === false;
const env = __PROD__ ? 'production' : 'development';

const dist = path.join(__dirname, __PROD__ ? 'docs' : 'dist');
const app = path.join(__dirname, 'app');
const nodeModules = path.join(__dirname, 'node_modules');
const publicPath = __DEV__ ? '/' : 'http://novaline.space/react-mobile/';
const commonPaths = [
  './app/common/js/components'
];

console.log('正在生成common的整合文件index.js...\n');
genEntry.gen(commonPaths);
console.log('common整合文件生成完毕.\n');

const nodeServerHost = 'http://localhost:3003';

const config = {
  /**
   * webpack 自身就有 cache 的配置，并且在 watch 模式下自动开启，虽然效果不是最明显的，但却对所有的 module 都有效。
   */
  cache: __DEV__,

  entry: {
    app: [
      path.join(app, 'index.js')
    ],

    common: commonPaths.concat([
      './app/common/js/util',
      './app/api'
    ])
    // vendor: [
    //     'react',
    //     'react-dom',
    //     'react-router',
    //     'redux',
    //     'react-redux',
    //     'react-addons-css-transition-group',
    //     'material-ui',
    //     'hammerjs',
    //     'jQuery',
    //     'whatwg-fetch',
    //     'es6-promise',
    //     'velocity-animate',
    //     'react-tap-event-plugin'
    // ]
  },

  output: {
    path: dist,
    filename: 'bundles/[name].[hash:8].js',
    chunkFilename: 'modules/[id].[name].chunk.[chunkhash:8].js',
    publicPath,
    pathinfo: __DEV__
  },

  debug: __DEV__,

  module: {
    noParse: [],
    loaders: [{
      test: /\.(js|jsx)?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        // compact: false,

        /**
         * 如果要使用jest测试框架，在单元测试文件中*.spec.js,使用es6+的语法，
         * 第一：安装babel-jest
         * 第二：配合.babelrc文件
         *
         * 所以，需要将webpack babel-loader中配置的babel的相关参数(presets, plugins)放在.babelrc配置文件中。
         * 这样，jest和webpack将会公用.babelrc配置
         */
        // babelrc: false,
        // presets: ["es2015", "react", "stage-0"],
        // plugins: [
        //     /**
        //      * https://babeljs.io/docs/plugins/transform-runtime/
        //      * transform-runtime对于实例方法例如"foobar".includes("foo")是不支持的，还是需要babel-polyfill或者引入core-js指定的方法
        //      */
        //     ['transform-runtime',  {
        //         "helpers": true, // defaults to true
        //         "polyfill": true, // defaults to true
        //         "regenerator": false, // defaults to true
        //         "moduleName": "babel-runtime" // defaults to "babel-runtime"
        //     }],
        //     "add-module-exports"
        // ],
        /**
         * babel-loader 可以利用系统的临时文件夹缓存经过 babel 处理好的模块，对于 rebuild js 有着非常大的性能提升。
         */
        cacheDirectory: __DEV__
      }
    }, {
      test: /\.(scss|sass)$/,
      exclude: [/(node_modules|bower_components)/, /\.module\.scss$/],
      loader: ExtractTextPlugin.extract('style', `css?sourceMap!sass`)
    }, {
      test: /\.scss$/,
      include: [/\.module\.scss$/],
      loaders: ['style', 'css?modules&camelCase&sourceMap&localIdentName=[local]--[hash:base64:5]!sass']
    }, {
      test: /\.css$/,
      loader: 'style!css?sourceMap'
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'url',
      query: {
        limit: 8192,
        name: 'images/[name]-[hash:8].[ext]'
      }
    }]
  },

  sassLoader: {
    includePaths: ['app/common/scss'],
    sourceMap: true
  },

  resolve: {
    root: __dirname,
    modulesDirectories: ['node_modules', 'app'],
    extensions: ['', '.js', '.jsx', '.scss', '.sass', '.css', '.json'],
    alias: {
      app: app,
      modules: path.join(app, 'modules'),
      common: path.join(app, 'common'),
      // IScroll: path.join(nodeModules, 'iscroll/build/iscroll-lite.js')
      IScroll: path.join(nodeModules, 'iscroll/build/iscroll-probe.js')
    }
  },

  /**
   * 使用何种sourceMap
   * https://github.com/webpack/docs/wiki/configuration#devtool
   */
  devtool: __DEV__ ? 'source-map' : '',

  plugins: [
    new EnvReporter('webpack compile env :: '),
    new HtmlWebpackPlugin({
      template: path.join(app, 'index.html'),
      filename: 'index.html',
      title: `聚合工具 v${pkg.version}`,
      dll: 'bundles/' + require(path.join(__dirname, './dll/assets.json')).vendor.js
    }),
    new HtmlWebpackPlugin({
      template: path.join(app, 'index.html'),
      filename: 'home.html',
      title: `聚合工具 v${pkg.version}`,
      dll: 'bundles/' + require(path.join(__dirname, './dll/assets.json')).vendor.js
    }),
    new CopyWebpackPlugin([
      {from: `dll/${require(path.join(__dirname, 'dll/assets.json')).vendor.js}`, to: 'bundles'}
    ]),
    new webpack.DefinePlugin({
      __DEV__,
      __PROD__,
      __VERSION__: pkg.version,
      'process.env': {
        NODE_ENV: JSON.stringify(env)
      }
    }),
    new ExtractTextPlugin('[name].[contentHash:8].css', {
      allChunks: true
    }),
    new webpack.ProvidePlugin({
      API: path.join(app, 'api.js'),
      React: 'react',
      ReactDOM: 'react-dom',
      ReactRouter: 'react-router',
      Redux: 'redux',
      ReactRedux: 'react-redux',
      Pubsub: 'pubsub-js',
      $: 'jQuery',
      /**
       *  promise和fetch的polyfill
       *  在chrome 50+上使用fetch和promise的地方断点调试，发现是
       *  function fetch() { [native code] }
       *  function Promise() { [native code] }
       *  使用的是原生的fetch和promise方法
       *  最开始以为webpack配置的不对，后来想了下，polyfill的含义是： 检测原生的方法是否可用，可用就使用原生的，否则就使用polyfill的
       *  在safari 版本 9.1.2 (11601.7.7)上测试了下，断点查看fetch和promise，使用了polyfill的fetch和promise，没毛病
       */

      Promise: 'es6-promise',
      fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch',
      ReactCSSTransitionGroup: 'react-addons-css-transition-group',
      util: path.join(app, 'common/js/util.js')
    }),
    new CleanWebpackPlugin(['dist', 'docs', 'build'], {
      root: __dirname,
      verbose: true,
      dry: false
    }),

    /**
     * ERROR in chunk vendor [entry]
     bundles/vendor-[chunkhash:8].js
     Cannot use [chunkhash] for chunk in 'bundles/vendor-[chunkhash:8].js' (use [hash] instead)
     */
    // new webpack.optimize.CommonsChunkPlugin({
    //     name: 'vendor',
    //     filename: 'bundles/vendor-[hash:8].js',
    //     minChunks: Infinity
    // }),


    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'bundles/common-[hash:8].js',
      minChunks: Infinity
    }),

    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require(path.join(__dirname, './dll/vendor-manifest.json'))
    })
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

    pathRewrite: {'^/api': ''}

  };

  for (let pathTarget of pathTargets) {
    const {paths, target: targetHost} = pathTarget;
    const {length: len} = paths;
    for (let i = 0; i < len; i++) {
      const target = process.env.NODE_ENV === 'node-server-proxy' ? nodeServerHost : targetHost;
      proxy[paths[i]] = Object.assign({}, baseConfig, {target})
    }
  }

  return proxy;
}


if (__DEV__) {

  config.devServer = {
    contentBase: '.',
    historyApiFallback: true,
    colors: true,
    //浏览器中访问必须是http协议，https协议是不能访问的
    https: false,
    port: 3002,
    inline: true,
    // stats: 'errors-only',
    stats: {
      chunks: false
    },
    proxy: setProxy([
      {
        paths: ['/api/ip/ip2addr', '/api/mobile/get'],
        target: 'http://apis.juhe.cn'
      },
      {
        paths: ['/api/toutiao/index'],
        target: 'http://v.juhe.cn'
      }
    ]),
    host: '0.0.0.0'
  };
}

if (__PROD__) {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new FaviconsWebpackPlugin(path.join(app, 'favicon.png')),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin()
  );
}

module.exports = config;
