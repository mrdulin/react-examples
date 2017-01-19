/**
 * Created by dulin on 17/1/19.
 */
import Express from 'express';
import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import global from '../common/reducers';
import App from '../common/containers/App';
import {renderToString} from 'react-dom/server';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config';

import configureStore from '../common/configureStore';


const app = Express();
const port = 3000;

app.use(handleRender);

function handleRender(req, res) {
    // 创建新的 Redux store 实例
    const store = configureStore(global);

    // 把组件渲染成字符串
    const html = renderToString(
        <Provider store={store}>
            <App />
        </Provider>
    );

    // 从 store 中获得初始 state
    const initialState = store.getState();

    // 把渲染后的页面内容发送给客户端
    res.send(renderFullPage(html, initialState));
}

function renderFullPage(html, initialState) {
    return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `
}

// 使用 middleware 於 webpack 去進行 hot module reloading
const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: webpackConfig.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.listen(port, error => {
    if(error) {
        console.error(error);
    } else {
        console.log(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
    }
});