/**
 * Created by dulin on 2017/7/6.
 */
import {ActionMeta} from 'redux-actions';

import {pagingReducer, itemsReducer, SearchActionMeta, SearchAction} from '../reducers';
import {QUERY_BOOK, GET_BOOK_DETAIL, CLEAR} from '../actionTypes';
import {IPaging} from 'interfaces/common';
import Book from 'models/Book';

describe('search - reducer test suites', () => {

  describe('pagingReducer test suites', () => {

    const initState: IPaging = {
      total: -1,
      page: 0,
      pageSize: 10,
      hasMore: true
    };
  
    it(`action type - ${QUERY_BOOK}_FULFILLED - t1`, () => {
      
      const action: SearchActionMeta = {
        type: `${QUERY_BOOK}_FULFILLED`,
        payload: {
          Error: '0',
          Time: 0.3,
          Total: '10',
          Page: 1,
          Books: [
            new Book()  
          ]
        },
        meta: {
          page: 1,
          query: 'react'
        }
      };
      
      const actualState: IPaging = pagingReducer(initState, action);
      const expectState: IPaging = {
        total: 10,
        page: 1,
        pageSize: 10,
        hasMore: false
      };
      expect(actualState).toEqual(expectState);
      
    });
    
    it(`action type - ${QUERY_BOOK}_FULFILLED - t2`, () => {
      
      const action: SearchActionMeta = {
        type: `${QUERY_BOOK}_FULFILLED`,
        meta: {
          page: 1,
          query: 'react'
        }
      };
      
      const actualState: IPaging = pagingReducer(initState, action);
      const expectState: IPaging = initState;
      
      expect(actualState).toEqual(expectState);
      
    });

  });
  
  describe('itemsReducer test suites', () => {
    
    
  });
  
});

