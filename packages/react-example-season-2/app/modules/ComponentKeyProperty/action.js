import {
  REQUEST_BOOK_SUCCESS,
  REQUEST_BOOK_FAIL,

  REQUEST_DOUBAN_BOOK_SUCCESS,
  REQUEST_DOUBAN_BOOK_FAIL,

  MIXIN_DOUBAN_BOOK_INTO_BOOK_LIST
} from './actionTypes';

import {AD_MAP} from './helper.js';

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

export const requestDoubanBook = (query, type) => {
  return (dispatch, getState) => {

    const url = `${DOUBAN_API}/book/search`;

    //Fetch API cannot load https://api.douban.com/v2/book/search?q=%E4%BA%BA%E6%B0%91%E7%9A%84%E5%90%8D%E4%B9%89&count=3. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'https://localhost:3000' is therefore not allowed access. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.


    // fetch(url).then(res => res.json()).then(data => {
    //   const {books} = data;
    //   dispatch(requestDoubanBookSuccess(query, books))
    // }).catch(e => {
    //   dispatch(requestDoubanBookFail(e));
    // });

    $.ajax(url, {
      data: {
        q: query,
        count: 3
      },
      dataType: 'jsonp',
      success: (data) => {
        const {books} = data;
        dispatch(requestDoubanBookSuccess(query, books)).then(state => {
          const {page_componentKeyProperty} = state;
          const {bookModuleByName, doubanBooksByName} = page_componentKeyProperty;

          const bookModule = bookModuleByName[type];
          const doubanBookModule = doubanBooksByName[AD_MAP.get(type)];
          const {books: doubanBooks} = doubanBookModule;

          if(bookModule) {
            dispatch(mixinDoubanBookIntoBookList(bookModule, doubanBooks, type));
          }

        })
      },
      error: (jqxhr, textStatus, errorThrown) => {
        dispatch(requestDoubanBookFail(e));
      }
    });

  }
};

export const mixinDoubanBookIntoBookList = (bookModule, doubanBooks, type) => ({
  type: MIXIN_DOUBAN_BOOK_INTO_BOOK_LIST,
  payload: {
    bookModule,
    doubanBooks,
    type
  }
})

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
