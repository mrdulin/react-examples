import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Router } from 'react-router';

import configureStore from 'common/configureStore';
import routes from 'common/routes';

// 通过服务端注入的全局变量得到初始 state
const initialState = window.__INITIAL_STATE__;

const store = configureStore(initialState);

render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('app'),
);
