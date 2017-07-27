import * as t from '../actionTypes/promiseAll';
import { combineReducers } from 'redux';

const data1 = {};
const data1Reducer = (state: any = data1, action: any) => {
  switch (action.type) {
    case t.REQUEST_DATA_1_SUCCESS:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}

const data2 = {};
const data2Reducer = (state: any = data2, action: any) => {
  switch (action.type) {
    case t.REQUEST_DATA_2_SUCCESS:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}

const moduleReducer = combineReducers({
  data1: data1Reducer,
  data2: data2Reducer
});

export default moduleReducer;
