import {handleActions, combineActions} from 'redux-actions';
import {combineReducers} from 'redux';

import * as actionTypes from './actionTypes';

const booksReducer = handleActions({
  [`${actionTypes.GET_BOOKS_BY_NAME.toString()}_FULFILLED`]: (state, action) => {
    const {entities: {books}} = action.payload;
    return Object.assign({}, state, books);
  },
  [`${actionTypes.CLEAR_DATA.toString()}`]: (state, action) => {
    return {};
  }
}, {});

const bookIdsReducer = handleActions({
  [`${actionTypes.GET_BOOKS_BY_NAME.toString()}_FULFILLED`]: (state, action) => {
    const {result} = action.payload;
    return state.concat(result);
  },
  [`${actionTypes.CLEAR_DATA.toString()}`]: (state, action) => {
    return [];
  }
}, []);

const paging = {
  total: 0,
  pageNum: 0,
  pageSize: 10,
  hasMore: true
};
const pagingReducer = handleActions({
  [`${actionTypes.GET_BOOKS_BY_NAME.toString()}_FULFILLED`]: (state, action) => {
    const {total, result} = action.payload;
    if(!result.length) return state;
    const {pageNum} = action.meta;
    const hasMore = pageNum * state.pageSize < total;
    return Object.assign({}, state, {total, pageNum, hasMore});
  },
  [`${actionTypes.CLEAR_DATA.toString()}`]: (state, action) => {
    return Object.assign({}, state, paging);
  }
}, paging);

const queryReducer =  handleActions({
  [`${actionTypes.GET_BOOKS_BY_NAME.toString()}_PENDING`]: (state, action) => {
    return action.meta.query;
  }
}, '');

const isFetchingReducer = handleActions({
  [`${actionTypes.GET_BOOKS_BY_NAME.toString()}_PENDING`]: () => true,
  [combineActions(`${actionTypes.GET_BOOKS_BY_NAME.toString()}_FULFILLED`, `${actionTypes.GET_BOOKS_BY_NAME.toString()}_REJECTED`)]: () => false
}, false);

const moduleReducer = combineReducers({
  books: booksReducer,
  paging: pagingReducer,
  query: queryReducer,
  bookIds: bookIdsReducer,
  isFetching: isFetchingReducer
});

export default moduleReducer;
