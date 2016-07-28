const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.js');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackhotMiddleware = require('webpack-hot-middleware');

const port = 3000;
const app = express();
const compiler = webpack(config);
const static_dir = path.resolve(__dirname, 'dist');

app.use(express.static(static_dir));

app.use(webpackDevMiddleware(compiler, {
    noInfo: false,
    publicPath: config.output.publicPath,
    stats: {
        colors: true
    }
}));

app.use(webpackhotMiddleware(compiler, {
	log: console.log 
}));

app.get('*', function (req, res) {
    var indexPath = path.resolve(__dirname, 'dist', 'index.html');
    res.sendFile(indexPath);
});

app.listen(port, function onAppListening(err) {
    if (err) {
        console.error(err);
    } else {
        console.info('==> Webpack development server listening on port %s', port);
    }
});
