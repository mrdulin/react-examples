import {combineReducers} from 'redux';

import bookModuleByNameReducer from './bookModuleByName';
import doubanBooksByNameReducer from './doubanBooksByName.js';

const moduleReducer = combineReducers({
  bookModuleByName: bookModuleByNameReducer,
  doubanBooksByName: doubanBooksByNameReducer
});

export default moduleReducer;
