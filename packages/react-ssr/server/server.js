/**
 * Created by dulin on 17/1/19.
 */
import React from 'react';
import express from 'express';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
// import createLocation from 'history/lib/createLocation';
import path from 'path';

import routes from 'common/routes';
import configureStore from 'common/configureStore';

const app = express();
app.use(express.static('client'));

app.set('port', process.env.PORT || 3000);

app.get('*', function handleRender(req, res) {


  const initialState = {};
  const store = configureStore(initialState);
  // const location = createLocation(req.url);

  //TODO：match操作前可以进行一些数据准备工作，来初始化initialState
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {

      //服务器端自己的错误提示
      console.error(error);

      //对客户端的错误提示
      return res.status(500).end('Internal server error');

    }

    if (redirectLocation) {

      const { pathname, search } = redirectLocation;
      const url = pathname + search;

      return res.redirect(302, url);

    }

    if (renderProps) {

      console.log(JSON.stringify(renderProps, null, 4));

      // 把组件渲染成字符串
      const html = renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      );

      // 把混合了数据的视图模板发送给客户端
      res.status(200).end(renderFullPage(html, initialState));

    }

    res.status(404).end('404 Not found');
  });

});


//TODO: 替换成模板引擎
function renderFullPage(html, initialState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="http://localhost:3000/bundle.js"></script>
      </body>
    </html>
    `
}

app.listen(app.get('port'), error => {
  if (error) {
    console.error(error);
  } else {
    console.log(`==> 🌎  Listening on port ${app.get('port')}. Open up http://localhost:${app.get('port')}/ in your browser.`)
  }
});
