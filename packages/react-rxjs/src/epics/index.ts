import { combineEpics } from 'redux-observable';
import { searchWikipediaEpic, clearWikipediaEpic } from './wikipedia';
import { requestBooksEpic } from './book';
import { requestPageEpic, requestModuleEpic } from './page';
import { requestAllDataEpic } from './promiseAll';

const rootEpic = combineEpics<any>(
  searchWikipediaEpic,
  clearWikipediaEpic,
  requestBooksEpic,
  requestPageEpic,
  requestModuleEpic,
  requestAllDataEpic
);

export default rootEpic;
