import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import wikipedia from './wikipedia';
import bookModules from './books';
import errorMap from './error';
import page from './page';
import modules from './modules';
import promiseAll from './promiseAll';

const rootReducer = combineReducers({
  wikipedia,
  bookModules,
  page,
  modules,
  promiseAll,
  errorMap,
  routing: routerReducer
});

export default rootReducer;
