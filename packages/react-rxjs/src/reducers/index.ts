import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import wikipedia from './wikipedia';
import bookModules from './books';
import errorMap from './error';
import page from './page';

const rootReducer = combineReducers({
  wikipedia,
  bookModules,
  page,
  errorMap,
  routing: routerReducer
});

export default rootReducer;
