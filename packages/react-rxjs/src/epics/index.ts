import { combineEpics } from 'redux-observable';
import { searchWikipediaEpic, clearWikipediaEpic } from './wikipedia';
import { requestBooksEpic } from './book';
import { requestPageEpic, requestModuleEpic, clearModuleByIdEpic } from './page';

const rootEpic = combineEpics<any>(
  searchWikipediaEpic,
  clearWikipediaEpic,
  requestBooksEpic,
  requestPageEpic, 
  requestModuleEpic, 
  clearModuleByIdEpic
);

export default rootEpic;
