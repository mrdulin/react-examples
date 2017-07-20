import { combineEpics } from 'redux-observable';
import { searchWikipediaEpic, clearWikipediaEpic } from './wikipedia';
import { requestBooksEpic } from './book';
import { requestPageEpic } from './page';

const rootEpic = combineEpics<any>(
  searchWikipediaEpic,
  clearWikipediaEpic,
  requestBooksEpic,
  requestPageEpic
);

export default rootEpic;
