import {createAction} from 'redux-actions';
import {normalize} from 'normalizr';
import {bookListSchema} from './schema';
import * as actionTypes from './actionTypes';

const API = 'http://it-ebooks-api.info/v1';

const getBooksByName = createAction(actionTypes.GET_BOOKS_BY_NAME.toString(), async (params) => {
  const {query, pageNum} = params;
  const url = `${API}/search/${query}/page/${pageNum}`;
  try {
    return await fetch(url).then(res => res.json()).then(data => {
      let {Books = [], Total: total} = data;
      const booksNormalized = normalize(Books, bookListSchema);
      total = Number.parseInt(total, 10);
      return {
        ...booksNormalized,
        total
      };
    })
  } catch(e) {
    return Promise.reject(e);
  }
}, ({pageNum, query}) => ({
  pageNum: Number.parseInt(pageNum, 10),
  query
}));

const clearData = createAction(actionTypes.CLEAR_DATA.toString());

const action_1 = createAction('ACTION_1');
const action_2 = createAction('ACTION_2');
const action_3 = createAction('ACTION_3', num => {
  return new Error('action_3 error');
});

export {
  getBooksByName,
  clearData,
  action_1,
  action_2,
  action_3
};
