import {combineReducers} from 'redux';

import bookModuleByNameReducer from './bookModuleByName';

const moduleReducer = combineReducers({
  bookModuleByName: bookModuleByNameReducer
});

export default moduleReducer;
