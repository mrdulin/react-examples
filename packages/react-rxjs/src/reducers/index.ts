import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import wikipedia from './wikipedia';
import bookModules from './books';
import errorMap from './error';
import page from './page';
import modules from './modules';

const rootReducer = combineReducers({
  wikipedia,
  bookModules,
  page,
  modules,
  errorMap,
  routing: routerReducer
});

export default rootReducer;
