import {createSelector} from 'reselect';

const getBooks = (state) => state.ReselectFlowReducers.books;
const getBookFilter = state => state.ReselectFlowReducers.bookVisibleFilter;

export const getBooksState = createSelector(
  [getBooks],
  books => {
    console.log("getBooksState");
    return books;
  }
)

export const getBookNames = createSelector(
  [getBooks],
  books => {
    console.log('getBookNames');
    return books.map(book => book.name);
  }
)

//getBookByFilter selector只会在state.ReselectFlowReducers.bookVisibleFilter和state.ReselectFlowReducers.books发生变化时重新执行
export const getBookByFilter = createSelector(
  [getBooks, getBookFilter],
  (books, filter) => {
    console.count('getBookByFilter execute count');

    switch(filter) {
      case 'SHOW_ALL': {
        return books;
      }
      case 'SHOW_SELL_OUT': {
        return books.filter(book => book.sellout);
      }
      case 'SHOW_NOT_SELL_OUT': {
        return books.filter(book => !book.sellout);
      }
    }

  }
)
