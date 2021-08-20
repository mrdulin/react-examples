import { handleActions, combineActions } from 'redux-actions';
import * as t from '../actionTypes';

const initialState = {
  req1: '',
  req2: ''
};
export const promiseAllreducer = handleActions({
  [`${t.REQUEST_ONE}_FULFILLED`]: (state, action) => {
    return Object.assign({}, state, { req1: action.payload });
  },
  [combineActions(`${t.REQUEST_TWO}_FULFILLED`, t.REQUEST_TWO_FALLBACK)]: (state, action) => {
    return Object.assign({}, state, { req2: action.payload });
  }
}, initialState);
