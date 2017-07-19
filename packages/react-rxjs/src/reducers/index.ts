import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import wikipedia from './wikipedia';
import bookModules from './books';
import errorMap from './error';

const rootReducer = combineReducers({
  wikipedia,
  bookModules,
  errorMap,
  routing: routerReducer
});

export default rootReducer;
