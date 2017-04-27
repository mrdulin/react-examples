import {
  REQUEST_BOOK_SUCCESS,
  REQUEST_BOOK_FAIL
} from '../actionTypes';
import update from 'react/lib/update';

export function objKeyToLowerCase(obj) {
  Object.keys(obj).forEach(function(key, idx) {
    const lowercaseKey = key.toLowerCase();
    this[lowercaseKey] = this[key];
    delete this[key];
  }, obj);

  return obj;
}

function bookModuleByNameReducer(state = {
  error: null
}, action) {
  switch(action.type) {
    case REQUEST_BOOK_SUCCESS: {
      const {books, query} = action.payload;

      books.forEach(objKeyToLowerCase);

      return update(state, {
        [query]: {
          $set: books
        }
      })
    };
    case REQUEST_BOOK_FAIL: {
      return Object.assign({}, state, {error: action.payload});
    };
    default:
      return state;
  }
}

export default bookModuleByNameReducer;
