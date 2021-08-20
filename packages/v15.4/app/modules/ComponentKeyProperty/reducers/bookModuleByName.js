import {
  REQUEST_BOOK_SUCCESS,
  REQUEST_BOOK_FAIL,
  MIXIN_DOUBAN_BOOK_INTO_BOOK_LIST
} from '../actionTypes';
import update from 'react/lib/update';
import {insertElementToArrayByIndex, adInsertRules} from '../helper.js';

export function objKeyToLowerCase(obj) {
  Object.keys(obj).forEach(function (key, idx) {
    const lowercaseKey = key.toLowerCase();
    this[lowercaseKey] = this[key];
    delete this[key];
  }, obj);

  return obj;
}

export function removeProtocol(book) {
  book.image = book.image.replace('http:', '');
  return book;
}

export function swapValue(book) {
  const category = book.title;
  book.title = book.subtitle;
  book.subtitle = category;
}

function bookModuleByNameReducer(state = {
  error: null
}, action) {
  switch (action.type) {
    case REQUEST_BOOK_SUCCESS: {
      const {books, query} = action.payload;

      books.forEach(objKeyToLowerCase)
      books.map(removeProtocol);

      return update(state, {
        [query]: {
          $set: books
        }
      })
    }
      ;
    case REQUEST_BOOK_FAIL: {
      return Object.assign({}, state, {error: action.payload});
    }
      ;
    case MIXIN_DOUBAN_BOOK_INTO_BOOK_LIST: {
      const {bookModule, doubanBooks, type} = action.payload;
      doubanBooks.forEach(swapValue);
      const booksMixed = insertElementToArrayByIndex(bookModule, doubanBooks, adInsertRules);


      return update(state, {
        [type]: {
          $set: booksMixed
        }
      });
    }
    default:
      return state;
  }
}

export default bookModuleByNameReducer;
