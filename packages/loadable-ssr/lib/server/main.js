"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _server2 = require("@loadable/server");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
const port = 9000;

const static_dir = _path.default.resolve(__dirname, '../../dist');

app.use(_express.default.static(static_dir));

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');

  const middleware = require('webpack-dev-middleware');

  const webpackConfig = require('../../webpack.config');

  const compiler = webpack(webpackConfig);
  app.use(middleware(compiler, {
    publicPath: '/dist',

    writeToDisk(filePath) {
      return /dist\/node\//.test(filePath) || /loadable-stats/.test(filePath);
    }

  }));
}

const webStats = _path.default.resolve(__dirname, '../../dist/web/loadable-stats.json');

const nodeStats = _path.default.resolve(__dirname, '../../dist/node/loadable-stats.json');

app.get('*', (req, res) => {
  const nodeExtractor = new _server2.ChunkExtractor({
    statsFile: nodeStats
  });
  const {
    default: App
  } = nodeExtractor.requireEntrypoint();
  const webExtractor = new _server2.ChunkExtractor({
    statsFile: webStats
  });
  const jsx = webExtractor.collectChunks( /*#__PURE__*/_react.default.createElement(App, null));
  const html = (0, _server.renderToString)(jsx);
  res.set('content-type', 'text/html');
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
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