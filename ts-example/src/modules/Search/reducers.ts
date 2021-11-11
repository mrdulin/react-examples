import { handleAction, handleActions, Action, ActionMeta, Reducer } from 'redux-actions';
import { combineReducers, Reducer as ReduxReducer } from 'redux';
import { QUERY_BOOK, GET_BOOK_DETAIL, CLEAR } from './actionTypes';

import { ISearchParams, ISearchEntity, ISearchReducerState } from './interfaces';
import Book from 'models/Book';
import { IPaging } from 'interfaces/common';
import { ISearchBook } from 'interfaces/book';

const pagingState: IPaging = {
  total: -1,
  page: 0,
  pageSize: 10,
  hasMore: true
};

export type SearchActionMeta = ActionMeta<ISearchEntity<Book>, ISearchParams>;
export type SearchAction = Action<ISearchEntity<ISearchBook>>;
export type SearchPayload = ISearchEntity<ISearchBook>;

export const pagingReducer: Reducer<IPaging, ISearchEntity<Book>> = handleActions<IPaging, ISearchEntity<Book>>({
  [`${QUERY_BOOK}_FULFILLED`]: (state: IPaging, action: SearchActionMeta): IPaging => {
    if (action.payload) {
      const { Total }: { Total: string } = action.payload;
      const total: number = Number.parseInt(Total, 10);
      const { page }: { page: number } = action.meta;
      const hasMore: boolean = page * state.pageSize < total;

      return Object.assign({}, state, { page, hasMore, total });
    } else {
      return state;
    }
  },
  [CLEAR]: (state: IPaging, action: SearchActionMeta): IPaging => {
    return Object.assign({}, state, pagingState);
  }
}, pagingState);


const itemsState: Book[] = [];
export const itemsReducer: Reducer<Book[], SearchPayload> = handleActions<Book[], SearchPayload>({
  [`${QUERY_BOOK}_FULFILLED`]: (state: Book[], action: SearchAction): Book[] => {
    if (action.payload && action.payload.Books) {
      const books: ISearchBook[] = action.payload.Books;

      const uniqItems: ISearchBook[] = books.filter((item: ISearchBook): boolean => {
        const index: number = state.findIndex((el: Book): boolean => {
          return el.id === item.ID;
        });
        return index === -1;
      });

      const items: Book[] = uniqItems.map((book: ISearchBook) => new Book(book));

      return state.concat(items);
    } else {
      return state;
    }
  },
  [CLEAR]: () => {
    return [];
  }
}, itemsState);

const queryState: string = '';
const queryReducer: Reducer<string, ISearchEntity<Book>> = handleAction<string, ISearchEntity<Book>, ISearchParams>(
  `${QUERY_BOOK}_FULFILLED`,
  (state: string, action: SearchActionMeta): string => {
    return action.meta.query;
  },
  queryState
);

const itemState: Book = new Book();
const itemReducer: Reducer<Book, ISearchBook> = handleActions<Book, ISearchBook>({
  [`${GET_BOOK_DETAIL}_FULFILLED`]: (state: Book, action: Action<ISearchBook>): Book => {
    console.log(action.payload);
    return state;
  }
}, itemState);

const moduleReducer: ReduxReducer<ISearchReducerState<Book>> = combineReducers<ISearchReducerState<Book>>({
  paging: pagingReducer,
  items: itemsReducer,
  query: queryReducer,
  item: itemReducer
});

export default moduleReducer;
