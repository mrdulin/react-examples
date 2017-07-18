import * as t from '../actionTypes/wikipedia';

const searchWikipedia = (query: string) => ({
  type: t.SEARCH_WIKIPEDIA,
  payload: {
    query
  }
});

const receiveWikipedia = (content: any) => ({
  type: t.RECEIVE_WIKIPEDIA,
  payload: {
    content
  }
});

export {
  searchWikipedia,
  receiveWikipedia
};
