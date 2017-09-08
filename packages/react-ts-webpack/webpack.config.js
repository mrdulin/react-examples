const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

const alias = require('./scripts/alias');

const tsconfig = require('./tsconfig.json');
const pkgConfig = require('./package.json');

const env = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const build_env = process.env.BUILD_ENV;
const __PROD__ = env === 'production';

const join = (...args) => path.resolve(process.cwd(), ...args);
const PORT = 2222;

const publicPathMap = {
  local: `//localhost:${PORT}/${pkgConfig.name}/docs/`,
  remote: `/`
};

const publicPath = publicPathMap[build_env] || publicPathMap.remote;

const cssLoaderOptions = {
  sourceMap: true,
  importLoaders: 2
};

const cssLoaderModuleOptions = Object.assign({
  modules: true,
  camelCase: true,
  localIdentName: '[local]_[hash:base64:5]',
}, cssLoaderOptions);

const sassLoaderOptions = {
  includePaths: [join('src/styles')],
  sourceMap: true
};

const postcssLoaderOptions = {
  plugins: (loader) => [
    require('autoprefixer')()
  ],
  sourceMap: true
};

function getStyleLoaders(cssModule) {
  return [
    {
      loader: 'css-loader',
      options: cssModule ? cssLoaderModuleOptions : cssLoaderOptions
    },
    {
      loader: 'postcss-loader',
      options: postcssLoaderOptions
    },
    {
      loader: 'sass-loader',
      options: sassLoaderOptions
    },
    {
      loader: 'sass-resources-loader',
      options: {
        resources: [
          join('src/styles/variables.scss'),
          join('src/styles/mixins.scss')
        ]
      }
    }
  ];
}

const rules = [
  {
    test: /\.(ts|tsx)$/,
    enforce: 'pre',
    loader: 'tslint-loader',
    options: {
      failOnHint: false
    }
  },
  {
    test: /\.(tsx|ts)?$/,
    loader: 'ts-loader',
    exclude: /node_modules/
  },
  {
    test: /\.(scss|css)$/,
    exclude: [
      /\.module\.(scss|css)$/
    ],
    use: env === 'production' ? ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: getStyleLoaders()
    }) : ['style-loader'].concat(getStyleLoaders())
  },
  {
    test: /\.(scss|css)$/,
    include: [/\.module\.(scss|css)$/],
    use: env === 'production' ? ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: getStyleLoaders(true)
    }) : ['style-loader'].concat(getStyleLoaders(true))
  }
];

const plugins = [
  new HtmlWebpackPlugin({
    template: './src/index.html',
    cache: true
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: ['vendor', 'manifest']
  }),
  // TODO: watch mode下得HRM貌似不起作用
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(env)
    },
    __PROD__
  }),
  // new webpack.ProvidePlugin({
  //   Chance: 'chance'
  // }),
  new ExtractTextPlugin({
    filename: 'styles/[name].[contenthash:8].css',
    allChunks: true,
    disable: env === 'development'
  }),
  new CleanWebpackPlugin(['dist', 'docs', 'build'])
];


if (env === 'production') {
  plugins.push(
    new UglifyJSPlugin()
  )
}

const config = {
  target: 'web',
  cache: true,
  entry: {
    app: './src/index.tsx',
    vendor: [
      'react',
      'react-dom',
      'react-router',
      'redux',
      'react-redux',
      'redux-actions',
      'redux-thunk',
      "redux-promise-middleware",
      'classnames',
      'isomorphic-fetch',
      'seamless-immutable'
    ]
  },
  output: {
    path: join('docs'),
    filename: env === 'development' ? 'scripts/[name].js' : 'scripts/[name].[hash:8].js',
    publicPath,
    pathinfo: !__PROD__
  },
  resolve: {
    //webpack1.x中的resolve.root已被webpack2.x的resolve.modules替代
    modules: [
      'node_modules',
      //解决typescript无法使用webpack指定的模块解析别名的问题
      //https://github.com/s-panferov/awesome-typescript-loader/issues/156
      //https://stackoverflow.com/questions/40443806/webpack-resolve-alias-does-not-work-with-typescript
      join(tsconfig.compilerOptions.baseUrl)
    ],
    alias: Object.assign({}, alias(join('src'), ['typings']), {
      'swiper-css': join('node_modules/swiper/dist/css/swiper.min.css'),
      'swiper': join('node_modules/swiper/dist/js/swiper.min.js')
    }),
    extensions: ["*", ".tsx", ".ts", ".js", ".jsx", ".scss", ".css", ".sass", ".json"],
    mainFiles: ["index"]
  },
  module: {
    rules
  },
  devtool: __PROD__ ? 'source-map' : 'inline-source-map',
  plugins
};

if (env !== 'production') {
  config.devServer = {
    contentBase: './src/',
    historyApiFallback: false,
    host: '0.0.0.0',
    hot: true,
    inline: true,
    port: PORT,
    proxy: {
      // http请求代理，可以解决api请求cors问题
      // http://localhost:2222/douban/api/movie/in_theaters?city=上海 -> (代理到) -> http://api.douban.com/v2/movie/in_theaters?city=上海
      "/douban/api": {
        target: "http://api.douban.com",
        // [HPM] Error occurred while trying to proxy request /v2/movie/in_theaters from localhost:2222 to http://api.douban.com (ECONNRESET) (https://nodejs.org/api/errors.html#errors_common_system_errors)
        // 添加changeOrigin: true解决上面的报错
        changeOrigin: true,
        pathRewrite: { '^/douban/api': '/v2' }
      }
    }
  }
}


module.exports = config;
