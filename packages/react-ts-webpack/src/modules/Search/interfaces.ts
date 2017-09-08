/**
 * Created by dulin on 2017/6/28.
 */
import { IPaging } from 'interfaces/common';

export interface ISearchEntity<T> {
  Error: string;
  Time?: number;
  Total: string;
  Page?: number;
  Books?: T[];
}

export interface ISearchParams {
  query: string;
  page: number;
}

export interface ISearchResultsState<T> {
  readonly results: T[];
}

export interface ISearchActions {
  onSearch: (query: string, page: number) => Promise<any>;
  onClear: () => void;
}

export interface ISearchDetailActions {
  getBookById: (id: number | string) => Promise<any>;
}


export interface ISearchReducerState<T> {
  items: T[];
  paging: IPaging;
  query: string;
  item: T;
}

export interface ISearchBookId {
  id: number;
}

