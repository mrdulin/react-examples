import {
  REQUEST_BOOK_SUCCESS,
  REQUEST_BOOK_FAIL
} from './actionTypes';

const API = 'http://it-ebooks-api.info/v1';

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
})
