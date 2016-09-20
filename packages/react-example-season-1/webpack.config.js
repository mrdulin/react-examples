const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const clearWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const pkg = require('./package.json');

const __PROD__ = process.env.NODE_ENV === 'production';
const __DEV__ = __PROD__ === false;

const dist = path.resolve(__dirname, __PROD__ ? 'docs' : 'dist');
const src = path.resolve(__dirname, 'src');

const PORT = 3001;

const getNodeModulePath = (nodeModulePath, symbol = '.') => {
	const filePath = path.dirname(nodeModulePath);
	const filename = path.basename(nodeModulePath, '.js');
	const ext = path.extname(filename);

	return path.resolve(__dirname, './node_modules/', __DEV__ ? nodeModulePath : (filePath + '/' + filename + symbol + 'min' + ext));
}

const publicPath = __PROD__ ? `http://novaline.space/${pkg.name}/` : '/';

const config = {
	entry: [
		src + '/index.js'
	],

	output: {
		path: dist,
		filename: __DEV__ ? '[name].js' : '[name].[hash].js',
		chunkFilename: '[id].chunk.js',
		publicPath
	},

	module: {
		noParse: [],
		loaders: [{
			test: /\.(js|jsx)?$/,
			exclude: /(node_modules|bower_components)/,
			include: src,
			loader: 'babel'
		}, {
			test: /\.(scss|sass)$/,
			exclude: /node_modules/,
			loader: ExtractTextPlugin.extract('style', 'css?sourceMap!sass?sourceMap')
		}, {
			test: /\.(png|jpg|gif|svg)$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'file',
			query: {
				name: '[path][name].[ext]',
				context: './src'
			}
		}]
	},

	resolve: {
		root: __dirname,
		extensions: ['', '.js', '.jsx', '.scss', '.sass', '.css', '.json'],
		alias: {
			'react-dom': getNodeModulePath('react-dom/dist/react-dom.js'),
			'articles': path.resolve(src, 'common/js', 'articles.js')
		}
	},

	devtool: __DEV__ ? 'source-map' : false,

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
		new ExtractTextPlugin('[name].[contenthash].css', {
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
	config.plugins.push(
		new clearWebpackPlugin(['dist', 'build', 'docs'], {
			root: __dirname,
			verbose: true,
			dry: false
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				dead_code: true,
				drop_debugger: true,
				booleans: true,
				loops: true,
				unused: true
			},
			mangle: true
		}),
		new webpack.optimize.CommonsChunkPlugin("commons", "commons.js"),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurrenceOrderPlugin()
	);
}

module.exports = config;
