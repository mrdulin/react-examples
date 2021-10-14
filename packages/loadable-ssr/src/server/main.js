import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ChunkExtractor } from '@loadable/server';

const app = express();
const port = 9000;
const static_dir = path.resolve(__dirname, '../../dist');

app.use(express.static(static_dir));
if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const middleware = require('webpack-dev-middleware');
  const webpackConfig = require('../../webpack.config');
  const compiler = webpack(webpackConfig);
  app.use(
    middleware(compiler, {
      publicPath: '/dist/web',
      writeToDisk(filePath) {
        return /dist\/node\//.test(filePath) || /loadable-stats/.test(filePath);
      },
    }),
  );
}

const webStats = path.resolve(__dirname, '../../dist/web/loadable-stats.json');
const nodeStats = path.resolve(__dirname, '../../dist/node/loadable-stats.json');

app.get('*', (req, res) => {
  const nodeExtractor = new ChunkExtractor({ statsFile: nodeStats });
  const { default: App } = nodeExtractor.requireEntrypoint();

  const webExtractor = new ChunkExtractor({ statsFile: webStats });
  const jsx = webExtractor.collectChunks(<App />);
  const html = renderToString(jsx);

  res.set('content-type', 'text/html');
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
      <meta charset="UTF-8"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      ${webExtractor.getLinkTags()}
      ${webExtractor.getStyleTags()}
      </head>
      <body>
        <div id="main">${html}</div>
        ${webExtractor.getScriptTags()}
      </body>
    </html>
    `);
});

app.listen(port, () => console.log(`Server started http://localhost:${port}`));
