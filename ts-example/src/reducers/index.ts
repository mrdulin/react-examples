import { combineReducers, Reducer } from 'redux';

// -- app reducers start--
import SearchReducers from 'modules/Search/reducers';
import { ISearchReducerState } from 'modules/Search/interfaces';
import ContactReducers, { IContactReducerState } from 'modules/Contact/reducers';
import Book from 'models/Book';
import { promiseAllreducer } from './promise-all';
// -- app reducers end --

export interface IState {
  search: ISearchReducerState<Book>;
  contact: IContactReducerState;
}

const rootReducer: Reducer<IState> = combineReducers<IState>({
  search: SearchReducers,
  contact: ContactReducers,
  promiseAll: promiseAllreducer
});

export default rootReducer;
