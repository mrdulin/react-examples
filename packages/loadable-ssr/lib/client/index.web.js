"use strict";

require("core-js");

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _component = require("@loadable/component");

var _App = _interopRequireDefault(require("./App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const root = document.getElementById('main'); // if (typeof window !== 'undefined') {
//   render(<App />, root);
// } else {

(0, _component.loadableReady)(() => {
  (0, _reactDom.hydrate)( /*#__PURE__*/_react.default.createElement(_App.default, null), root);
}); // }