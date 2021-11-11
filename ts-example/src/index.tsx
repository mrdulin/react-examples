// This is because while importing a CommonJS module, Babel assumes modules.export as default export, while TypeScript does not.
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './styles';
import store from './store';

import './store/promise-all';
import 'swiper-css';

import AppRouter from './router';

ReactDOM.render(
  <Provider store={store}>
    <AppRouter/>
  </Provider>,
  document.getElementById('app') as HTMLElement
);

// console.log(process.env.NODE_ENV);
// console.log(__PROD__);
