import {
  REQUEST_BOOK_SUCCESS,
  REQUEST_BOOK_FAIL,

  REQUEST_DOUBAN_BOOK_SUCCESS,
  REQUEST_DOUBAN_BOOK_FAIL
} from './actionTypes';

const API = 'https://it-ebooks-api.info/v1';
const DOUBAN_API = 'https://api.douban.com/v2';

export const init = (querys) => {
  return (dispatch, getState) => {

    for(let query of querys) {
      dispatch(requestBook(query));
    }
  }
};

export const requestBook = (query) => {
  return (dispatch, getState) => {

    const url = `${API}/search/${query}`;

    fetch(url).then(res => res.json()).then(data => {
      const {Books: books} = data;
      dispatch(requestBookSuccess(query, books));
    }).catch(e => {
      dispatch(requestBookFail(e));
    });

  };
};

export const requestBookSuccess = (query, books) => ({
  type: REQUEST_BOOK_SUCCESS,
  payload: {
    query,
    books
  }
});

export const requestBookFail = (e) => ({
  type: REQUEST_BOOK_FAIL,
  payload: e,
  error: true
});

export const requestDoubanBook = (query) => {
  return (dispatch, getState) => {

    const url = `${DOUBAN_API}/book/search?${query}&count=3`;

    fetch(url).then(res => res.json()).then(data => {
      const {books} = data;
      dispatch(requestDoubanBookSuccess(query, books))
    }).catch(e => {
      dispatch(requestDoubanBookFail(e));
    });

  }
};

export const requestDoubanBookSuccess = (query, books) => ({
  type: REQUEST_DOUBAN_BOOK_SUCCESS,
  payload: {
    query,
    books
  }
});

export const requestDoubanBookFail = (e) => ({
  type: REQUEST_DOUBAN_BOOK_FAIL,
  payload: e,
  error: true
});
