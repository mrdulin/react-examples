import * as t from '../actionTypes/book';

const requestBooks = (names: string[]) => ({
  type: t.REQUEST_BOOKS,
  payload: {
    names
  }
});

const requestBooksSuccess = (payload: any, meta: any) => ({
  type: t.REQUEST_BOOKS_SUCCESS,
  payload,
  meta
});

const requestBooksFail = (payload: any, meta: string) => ({
  type: t.REQUEST_BOOKS_FAIL,
  payload,
  error: true,
  meta
});

export {
  requestBooks,
  requestBooksSuccess,
  requestBooksFail
};
