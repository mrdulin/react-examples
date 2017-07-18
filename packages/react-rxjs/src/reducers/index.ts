import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import wikipedia from './wikipedia';

const rootReducer = combineReducers({
  wikipedia,
  routing: routerReducer
});

export default rootReducer;
