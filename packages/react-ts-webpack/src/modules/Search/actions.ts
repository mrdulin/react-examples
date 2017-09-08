/**
 * Created by dulin on 2017/6/21.
 */
import { createAction, ActionMeta } from 'redux-actions';
import { QUERY_BOOK, CLEAR, GET_BOOK_DETAIL } from './actionTypes';
import constants from '../../constants';
import { ISearchBook } from 'interfaces/book';
import * as fetch from 'isomorphic-fetch';

import { ISearchParams, ISearchEntity, ISearchBookId } from './interfaces';

type SearchActionPayload = Promise<ISearchEntity<ISearchBook>>;
type SearchActionFunction = (...args: any[]) => ActionMeta<SearchActionPayload, ISearchParams>;

/**
 * @desc 根据关键字和分页获取书籍列表
 * @type {ActionFunction0<Action<void>>}
 */
const search: SearchActionFunction = createAction<SearchActionPayload, ISearchParams>(
  QUERY_BOOK,
  async (params: ISearchParams): Promise<any> => {
    const { query, page }: { query: string, page: number } = params;
    const url: string = `${constants.API}/search/${query}/page/${page}`;

    try {
      return await new Promise((resolve, reject): Promise<any> => {
        return fetch(url)
          .then((res: Response) => res.json())
          .then((data: ISearchEntity<ISearchBook>): void => {
            const error: number = Number.parseInt(data.Error, 10);
            const total: number = Number.parseInt(data.Total, 10);
            if (error) {
              // TODO 这里data.Error在前端做个错误码->错误消息的映射
              reject(new Error(data.Error));
            } else {
              if (!total) {
                reject(new Error('no results'));
              }
              resolve(data);
            }
          });
      });
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.warn(`${QUERY_BOOK} caught at action creator with reason: ${JSON.stringify(error.message)}.`);
      }
      return Promise.reject(error);
    }
  }, (params: ISearchParams): ISearchParams => ({ ...params }));


type GetBookByIdActionPayload = Promise<ISearchBook>;
type GetBookByIdActionFunction = (...args: any[]) => ActionMeta<GetBookByIdActionPayload, ISearchBookId>;

/**
 * @description 获取书籍详情
 * @type {ActionFunction0<Action<void>>}
 */
const getBookById: GetBookByIdActionFunction = createAction<GetBookByIdActionPayload, ISearchBookId>(
  GET_BOOK_DETAIL,
  async (params: ISearchBookId): Promise<any> => {
    const url: string = `${constants.API}/book/${params.id}`;
    try {
      return await fetch(url)
        .then((res: Response) => res.json())
        .then((data: ISearchBook): Promise<any> => {
          const error: string | number = data.Error;
          return error ? Promise.reject(new Error(data.Error)) : Promise.resolve(data);
        });
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.warn(`${GET_BOOK_DETAIL} caught at action creator with reason: ${JSON.stringify(error.message)}.`);
      }
      return Promise.reject(error);
    }
  },
  (params: ISearchBookId): ISearchBookId => {
    return {
      id: params.id
    };
  }
);

const clear = createAction<void>(
  CLEAR,
  () => {
  }
);

export {
  search,
  getBookById,
  clear,

  SearchActionPayload,
  SearchActionFunction,
  GetBookByIdActionFunction
};
