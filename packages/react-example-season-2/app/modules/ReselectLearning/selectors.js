import {createSelector} from 'reselect';

//selector返回的数据的引用不能变
const getBooks = (state) => state.ReselectLearning.books;
const getBookFilter = state => state.ReselectLearning.bookVisibleFilter;

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

export const getBookByFilter = createSelector(
  [getBooks, getBookFilter],
  (books, filter) => {
    console.log('getBookByFilter');

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
