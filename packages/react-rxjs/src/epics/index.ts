import { combineEpics } from 'redux-observable';
import { searchWikipediaEpic, clearWikipediaEpic } from './wikipedia';
import { requestBooksEpic } from './book';

const rootEpic = combineEpics<any>(
  searchWikipediaEpic,
  clearWikipediaEpic,
  requestBooksEpic
);

export default rootEpic;
