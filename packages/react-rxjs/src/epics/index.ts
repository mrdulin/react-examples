import {combineEpics} from 'redux-observable';
import searchWikipedia from './wikipedia';

const rootEpic = combineEpics<any>(
  searchWikipedia
);

export default rootEpic;
