import {createAction} from 'redux-actions';
import {normalize} from 'normalizr';
import {bookListSchema} from './schema';
import * as actionTypes from './actionTypes';

const API = 'http://it-ebooks-api.info/v1/';

const getBooksByName = createAction(actionTypes.GET_BOOKS_BY_NAME.toString(), async (params) => {
  const {query, pageNum} = params;
  const url = `${API}/search/${query}/page/${pageNum}`;
  try {
    return await fetch(url).then(res => res.json()).then(data => {
      const {Books} = data;
      const booksNormalized = normalize(Books, bookListSchema);
      return booksNormalized;
    })
  } catch(e) {
    return Promise.reject(e);
  }
}, ({pageNum, query}) => ({
  pageNum: Number.parseInt(pageNum, 10),
  query
}));

const clearData = createAction(actionTypes.CLEAR_DATA.toString());

export {
  getBooksByName,
  clearData
};
