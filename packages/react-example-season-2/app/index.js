import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import store from 'app/store';
import { render, unmountComponentAtNode } from 'react-dom';

store.dispatch({ type: 'globalAction' });

import Perf from 'react-addons-Perf';
window.Perf = Perf;

import 'common/scss';
import Root from './routes';

const dom_container = document.getElementById('container');

let instance = render(<Root />, dom_container);

// window.renderComponent = () => {
//   console.log('挂载');
//   instance = ReactDOM.render(<Root />, dom_container);
// };
//
// window.setState = () => {
//   console.log('更新');
//   instance.setState({ foo: 'barbar' });
// };
//
// window.unmountComponentAtNode = () => {
//   console.log('卸载');
//   unmountComponentAtNode(dom_container);
// };
