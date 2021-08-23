import * as t from '../actionTypes/book';
import { IActionPayload, IActionMeta } from '../interfaces';

const requestBooks = (names: string[]): IActionPayload<any> => ({
  type: t.REQUEST_BOOKS,
  payload: {
    names
  }
});

const requestBooksSuccess = (payload: any, meta: string): IActionMeta<any, string> => ({
  type: t.REQUEST_BOOKS_SUCCESS,
  payload,
  meta
});

const requestBooksFail = (payload: any, meta: string): IActionMeta<any, string> => ({
  type: t.REQUEST_BOOKS_FAIL,
  payload,
  error: true,
  meta
});

const clearBooks = () => ({ type: t.CLEAR_BOOKS });

export {
  requestBooks,
  requestBooksSuccess,
  requestBooksFail,
  clearBooks
};
