import 'core-js';
import React from 'react';
import { render, hydrate } from 'react-dom';
import { loadableReady } from '@loadable/component';
import App from './App';

const root = document.getElementById('main');
// if (typeof window !== 'undefined') {
//   render(<App />, root);
// } else {
loadableReady(() => {
  hydrate(<App />, root);
});
// }
