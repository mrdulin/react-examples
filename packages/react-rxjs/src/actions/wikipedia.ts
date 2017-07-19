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

const clearWikipedia = () => ({
  type: t.CLEAR_WIKIPEDIA
});

export {
  searchWikipedia,
  receiveWikipedia,
  clearWikipedia
};
