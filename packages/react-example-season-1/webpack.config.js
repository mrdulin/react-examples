const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const clearWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const dist = path.resolve(__dirname, 'dist');
const src = path.resolve(__dirname, 'src');
const PORT = 3001;

const __PROD__ = process.env.NODE_ENV === 'production';
const __DEV__ = __PROD__ === false;

const getNodeModulePath = (nodeModulePath, symbol = '.') => {
	const filePath = path.dirname(nodeModulePath);
	const filename = path.basename(nodeModulePath, '.js');
	const ext = path.extname(filename);

	return path.resolve(__dirname, './node_modules/', __DEV__ ? nodeModulePath : (filePath + '/' + filename + symbol + 'min' + ext));
}

const publicPath = __DEV__ ? '/' : '/';

const config = {
	entry: [
		// 'babel-polyfill',
		src + '/index.js'
	],

	output: {
		path: dist,
		filename: '[name].[hash].js',
		chunkFilename: '[id].chunk.js',
		publicPath: publicPath
	},

	module: {
		noParse: [],
		loaders: [{
			test: /\.(js|jsx)?$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel'
		}, {
			test: /\.(scss|sass)$/,
			exclude: /node_modules/,
			loader: ExtractTextPlugin.extract('style', 'css?sourceMap!sass?sourceMap')
		}]
	},

	resolve: {
		root: __dirname,
		extensions: ['', '.js', '.jsx', '.scss', '.sass', '.css', '.json'],
		alias: {
			'react-dom': getNodeModulePath('react-dom/dist/react-dom.js')
		}
	},

	devtool: __DEV__ ? false : false,

	plugins: [
		new HtmlWebpackPlugin({
			template: src + '/index.html',
			filename: 'index.html'
		}),
		new webpack.DefinePlugin({
			__DEV__: __DEV__,
			__PROD__: __PROD__,
			'process.env': {
				NODE_ENV: JSON.stringify(__PROD__ ? 'production' : 'development')
			}
		}),
		new ExtractTextPlugin('[name].[hash].css', {
			allChunks: true
		})
	],

	addNoParse: (noParseMap) => {
		if (noParseMap.keys().length === 0) return;
		for (let [name, path] of noParseMap.entries()) {
			const filepath = getNodeModulePath(path);
			config.resolve.alias[name] = filepath;
			config.module.noParse.push(filepath);
		}
	}

};

//以redux-logger为例,
//未开启noParse时，编译时输出如下：
//[368] ./~/redux-logger/lib/index.js 8.49 kB {0} [built]
//[0] 418ms -> factory:546ms building:109ms = 1073ms
//编译模块数量为547个

//开启noParse时，编译模块数量为367个

config.addNoParse(new Map([
	['react', 'react/dist/react.js'],
	//react-redux依赖react，因此不能使用noParse
	// ['react-redux', 'react-redux/dist/react-redux.js'],
	['redux', 'redux/dist/redux.js'],
	['redux-logger', 'redux-logger/dist/index.js'],
	['redux-thunk', 'redux-thunk/dist/redux-thunk.js']
]));

// console.log(config.module.noParse)

if (__DEV__) {
	// webpack-dev-server 的cli 的--hot会添加HotModuleReplacementPlugin，所以不要重复添加。
	// config.plugins.push(new webpack.HotModuleReplacementPlugin());
	config.devServer = {
		contentBase: dist,
		historyApiFallback: true,
		colors: true,
		port: PORT,
		progress: true
	};
}

if (__PROD__) {
	config.plugins.push(new clearWebpackPlugin(['dist', 'build'], {
		root: __dirname,
		verbose: true,
		dry: false
	}));
	config.plugins.push(new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})),
	config.plugins.push(new webpack.optimize.CommonsChunkPlugin("commons", "commons.js"))
	config.plugins.push(new webpack.optimize.DedupePlugin());
	config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
}


module.exports = config;
