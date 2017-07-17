import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import AppRouter from './router';

const store: Store<any> = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('app') as HTMLElement
);
