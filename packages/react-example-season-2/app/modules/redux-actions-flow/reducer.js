import {handleActions} from 'redux-actions';
import {combineReducers} from 'redux';

import * as actionTypes from './actionTypes';

const booksReducer = handleActions({
  [`${actionTypes.GET_BOOKS_BY_NAME.toString()}_FULFILLED`]: (state, action) => {
    const {Books: books} = action.payload;
    return state.concat(books);
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
    const {Total: total} = action.payload;
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

const moduleReducer = combineReducers({
  books: booksReducer,
  paging: pagingReducer,
  query: queryReducer
});

export default moduleReducer;
