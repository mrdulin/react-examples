import {
  REQUEST_DOUBAN_BOOK_SUCCESS,
  REQUEST_DOUBAN_BOOK_FAIL
} from '../actionTypes.js';

import {combineReducers} from 'redux';

function books(state = {
  books: [],
  error: null
}, action) {
  switch (action.type) {
    case REQUEST_DOUBAN_BOOK_SUCCESS: {
      const {books} = action.payload;
      return Object.assign({}, state, {books});
    }
    case REQUEST_DOUBAN_BOOK_FAIL: {
      return Object.assign({}, state, {error: action.payload});
    }
    default:
      return state;
  }
};


function booksByName(state = {}, action) {
  switch (action.type) {
    case REQUEST_DOUBAN_BOOK_SUCCESS: {
      const {query} = action.payload;
      return Object.assign({}, state, {
        [query]: books(state[query], action)
      });
    }
    default:
      return state;
  }
}

export default booksByName;
