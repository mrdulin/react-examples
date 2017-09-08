/**
 * Created by dulin on 2017/7/10.
 */

import createMockStore, {MockStoreCreator, MockStore} from 'redux-mock-store';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import {createAction, Action, ActionMeta, ActionFunction1, ActionFunction0, BaseAction} from 'redux-actions';
import {Middleware} from 'redux';
import * as nock from 'nock';
import constants from '../../../constants';
import * as fetch from 'isomorphic-fetch';

import * as actions from '../actions';
import * as actionTypes from '../actionTypes';
import {ISearchBook} from 'interfaces/book';
import {ISearchEntity, ISearchParams} from '../interfaces';

const middlewares: Middleware[] = [
  thunk,
  promiseMiddleware()
];

const mockStore: MockStoreCreator<{}> = createMockStore<{}>(middlewares);

type ActionPayload = Promise<any>;
type ActionCreator = (...args: any[]) => Action<ActionPayload>;
type ExpectedActions<T> = [BaseAction, Action<T>];
type ExpectedActionsError = ExpectedActions<Error>;
type ExpectedActions0<T, R> = [Action<T>, Action<R>];

interface IFulfilledValue<Payload> {
  value: Payload;
  action: Action<Payload>;
}

describe('redux async actions test suites', () => {

  const store: MockStore<{}> = mockStore();
  const actionType: string = 'ASYNC_ACTION';

  describe('redux async actions test suites - without redux-actions', () => {

    afterEach(() => {
      store.clearActions();
    });

    it(`async action should be resolved`, async () => {
      expect.assertions(3);

      const message: string = 'ASYNC_ACTION resolved';

      const actionCreator: ActionCreator = (msg: string): Action<ActionPayload> => ({
        type: actionType,
        payload: new Promise((resolve): void => {
          resolve(msg);
        })
      });

      const expectedActions: ExpectedActions<string> = [{
        type: `${actionType}_PENDING`
      }, {
        type: `${actionType}_FULFILLED`,
        payload: 'ASYNC_ACTION resolved'
      }];

      const expectedAction: Action<string> = {
        type: `${actionType}_FULFILLED`,
        payload: message
      };

      return await (store.dispatch(actionCreator(message)) as any).then(({value, action}: IFulfilledValue<string>) => {
        const actualActions: any[] = store.getActions();
        expect(actualActions).toEqual(expectedActions);
        expect(action).toEqual(expectedAction);
        expect(value).toEqual(message);
      });

    });

    it('async action should be rejected', async () => {
      expect.assertions(1);

      const actionCreator: ActionCreator = (): Action<ActionPayload> => ({
        type: actionType,
        payload: new Promise((resolve, reject): void => {
          reject(new Error('ASYNC_ACTION rejected'));
        })
      });

      const expectedActions: ExpectedActionsError = [{
        type: `${actionType}_PENDING`
      }, {
        type: `${actionType}_REJECTED`,
        payload: new Error('ASYNC_ACTION rejected'),
        error: true
      }];

      return await (store.dispatch(actionCreator()) as any).catch((e: Error) => {
        const actualActions: any[] = store.getActions();
        // console.log(e.message);
        expect(actualActions).toEqual(expectedActions);

      });

    });

    it('async action should be resolved with meta', async () => {

      expect.assertions(1);

      const actionArg: string = 'foo';
      const actionPayload: string = 'payload fulfilled';
      const actionCreator: ActionCreator = (arg: string) => ({
        type: actionType,
        payload: new Promise((resolve, reject) => {
          resolve(actionPayload);
        }),
        meta: {
          name: arg
        }
      });

      const expectedActions = [{
        type: `${actionType}_PENDING`,
        meta: {name: actionArg}
      }, {
        type: `${actionType}_FULFILLED`,
        payload: actionPayload,
        meta: {name: actionArg}
      }];

      return await (store.dispatch(actionCreator(actionArg)) as any).then(() => {
        const actualActions: any[] = store.getActions();
        expect(actualActions).toEqual(expectedActions);
      });

    });
  });

  describe('redux async actions test suites - with redux-actions', () => {

    afterEach(() => {
      store.clearActions();
    });

    it('async action should be resolved with redux-actions', async () => {

      expect.assertions(1);

      const message: string = 'async action resolved';

      async function payloadCreator(msg: string): Promise<any> {
        return await new Promise((resolve, reject): void => {
          resolve(msg);
        });
      }

      type ActionPayload = Promise<any>;
      type ActionCreator = ActionFunction1<string, Action<ActionPayload>>;

      const actionCreator: ActionCreator = createAction<ActionPayload, string>(actionType, payloadCreator);

      const expectedActions: ExpectedActions<string> = [{
        type: `${actionType}_PENDING`
      }, {
        type: `${actionType}_FULFILLED`,
        payload: message
      }];

      return await (store.dispatch(actionCreator(message)) as any).then(() => {
        const actualActions: any[] = store.getActions();
        expect(actualActions).toEqual(expectedActions);
      });

    });

    it('async action should be rejected with redux-actions', async () => {

      expect.assertions(1);

      const message: string = 'async action rejected';

      async function payloadCreator(): Promise<any> {
        try {
          return await new Promise((resolve, reject) => {
            reject(new Error(message));
          });
        } catch (e) {
          // console.warn(e.message);
          return Promise.reject(e);
        }
      }

      type ActionPayload = Promise<any>;
      type ActionCreator = ActionFunction0<Action<ActionPayload>>;

      const actionCreator: ActionCreator = createAction<ActionPayload>(actionType, payloadCreator);

      const expectedActions: ExpectedActionsError = [{
        type: `${actionType}_PENDING`
      }, {
        type: `${actionType}_REJECTED`,
        payload: new Error(message),
        error: true
      }];

      return await (store.dispatch(actionCreator()) as any).catch((err: Error) => {
        const actualActions: any[] = store.getActions();
        expect(actualActions).toEqual(expectedActions);
      });
    });

    it('async action should be resolved with redux-actions and extra data of payload', async () => {

      expect.assertions(3);

      interface IParams {
        query: string;
        page: number;
      }

      interface IEntity {
        result: any[];
        error: number;
      }

      interface IFulfilledPayload<Entity, Arg> {
        entity: Entity;
        arg: Arg;
      }

      type Payload = IFulfilledPayload<IEntity, IParams>;

      const params: IParams = {
        query: 'react',
        page: 1
      };

      function payloadCreator(arg: IParams) {
        return {
          promise: new Promise((resolve) => {
            const entity = {result: [], error: 0};
            resolve({
              entity,
              arg
            });
          }),
          data: arg
        };
      }

      const actionCreator = createAction(actionType, payloadCreator);

      const expectedActions: ExpectedActions0<IParams, Payload> = [{
        type: `${actionType}_PENDING`,
        payload: {
          query: 'react',
          page: 1
        }
      }, {
        type: `${actionType}_FULFILLED`,
        payload: {
          entity: {
            result: [],
            error: 0
          },
          arg: {
            query: 'react',
            page: 1
          }
        }
      }];

      const expectedAction: Action<Payload> = {
        type: `${actionType}_FULFILLED`,
        payload: {
          entity: {
            result: [],
            error: 0
          },
          arg: {
            query: 'react',
            page: 1
          }
        }
      };

      const expectedValue: Payload = {
        entity: {
          result: [],
          error: 0
        },
        arg: {
          query: 'react',
          page: 1
        }
      };

      return await (store.dispatch(actionCreator(params)) as any).then(({value, action}: IFulfilledValue<Payload>) => {
        const actualActions: any[] = store.getActions();
        expect(value).toEqual(expectedValue);
        expect(action).toEqual(expectedAction);
        expect(actualActions).toEqual(expectedActions);
      });

    });

  });

  describe('nock test suites', () => {

    afterEach(() => {
      store.clearActions();
      nock.cleanAll();
    });

    it('t-1', async () => {

      expect.assertions(1);

      function fetchTodosRequest() {
        return {
          type: 'FETCH_TODOS_REQUEST'
        };
      }

      function fetchTodosSuccess(body: any) {
        return {
          type: 'FETCH_TODOS_SUCCESS',
          body
        };
      }

      function fetchTodosFailure(ex: any) {
        return {
          type: 'FETCH_TODOS_FAILURE',
          ex
        };
      }

      function fetchTodos() {
        return (dispatch: any) => {
          dispatch(fetchTodosRequest());
          return fetch('http://example.com/todos')
            .then((res: Response) => res.json())
            .then((json: any) => dispatch(fetchTodosSuccess(json.body)))
            .catch((ex: any) => dispatch(fetchTodosFailure(ex)));
        };
      }

      nock('http://example.com/')
        .get('/todos')
        .reply(200, {body: {todos: ['do something']}});

      const expectedActions = [
        {type: 'FETCH_TODOS_REQUEST'},
        {type: 'FETCH_TODOS_SUCCESS', body: {todos: ['do something']}}
      ];

      return await (store.dispatch(fetchTodos()) as any).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });

    });

  });

  describe('search actions test suites', () => {

    beforeEach(() => {
      nock.disableNetConnect();
    });

    afterEach(() => {
      store.clearActions();
      nock.cleanAll();
    });

    type SearchActionPayload = ISearchEntity<ISearchBook>;
    type SearchActionMeta = ISearchParams;
    type SearchExpectedAction = ActionMeta<SearchActionPayload, SearchActionMeta>;
    type SearchExpectedActionRejected = ActionMeta<Error, SearchActionMeta>;

    const Books: ISearchBook[] = [
      {
        ID: 1,
        Title: 'react',
        SubTitle: 'react is awesome',
        Description: 'xxx',
        Image: 'xxx',
        isbn: '123123'
      },
      {
        ID: 1,
        Title: 'react',
        SubTitle: 'react is awesome',
        Description: 'xxx',
        Image: 'xxx',
        isbn: '123123'
      }
    ];


    it(`search - ${actionTypes.QUERY_BOOK}_FULFILLED`, async () => {

      expect.assertions(4);

      const body: SearchActionPayload = {
        Error: '0',
        Time: 0.1,
        Total: '2',
        Page: 1,
        Books
      };

      const params: SearchActionMeta = {
        query: 'react',
        page: 1
      };

      const scope: nock.Scope = nock(constants.API).get(`/search/${params.query}/page/${params.page}`).reply(200, {...body});

      const expectedActions: SearchExpectedAction[] = [
        {
          type: `${actionTypes.QUERY_BOOK}_PENDING`,
          meta: params
        },
        {
          type: `${actionTypes.QUERY_BOOK}_FULFILLED`,
          payload: body,
          meta: params
        }
      ];

      // console.log(constants.API, actions.search);

      return await (store.dispatch(actions.search(params)) as any)
        .then(({value, action}: IFulfilledValue<SearchActionPayload>) => {
          const actualActions: any[] = store.getActions();
          scope.done();
          expect(value).toEqual(body);
          expect(scope.isDone()).toBeTruthy();
          expect(scope.pendingMocks()).toHaveLength(0);
          expect(actualActions).toEqual(expectedActions);
        });

    });

    it(`search - ${actionTypes.QUERY_BOOK}_REJECTED with server error`, async () => {

      expect.assertions(4);

      const ERROR_CODE: string = '1111';
      const body: SearchActionPayload = {
        Error: ERROR_CODE,
        Total: '0'
      };

      const params: SearchActionMeta = {
        query: 'sssss',
        page: 1
      };

      const scope: nock.Scope = nock(constants.API).get(`/search/${params.query}/page/${params.page}`).reply(200, body);

      const expectedActions: SearchExpectedActionRejected[] = [{
        type: `${actionTypes.QUERY_BOOK}_PENDING`,
        meta: params
      }, {
        type: `${actionTypes.QUERY_BOOK}_REJECTED`,
        payload: new Error(ERROR_CODE),
        meta: params,
        error: true
      }];

      return await (store.dispatch(actions.search(params)) as any)
        .catch((e: Error) => {
          const actualActions: any[] = store.getActions();
          scope.done();
          expect(e.message).toBe(ERROR_CODE);
          expect(scope.isDone()).toBeTruthy();
          expect(scope.pendingMocks()).toHaveLength(0);
          expect(actualActions).toEqual(expectedActions);
        });

    });
    
    it(`search - ${actionTypes.QUERY_BOOK}_REJECTED with no results`,  async () => {

      expect.assertions(4);

      const body: SearchActionPayload = {
        Error: '0',
        Total: '0'
      };

      const params: SearchActionMeta = {
        query: 'sssss',
        page: 1
      };

      const scope: nock.Scope = nock(constants.API).get(`/search/${params.query}/page/${params.page}`).reply(200, body);

      const expectedActions: SearchExpectedActionRejected[] = [{
        type: `${actionTypes.QUERY_BOOK}_PENDING`,
        meta: params
      }, {
        type: `${actionTypes.QUERY_BOOK}_REJECTED`,
        payload: new Error('no results'),
        meta: params,
        error: true
      }];

      return await (store.dispatch(actions.search(params)) as any)
        .catch((e: Error) => {
          const actualActions: any[] = store.getActions();
          scope.done();
          expect(e.message).toBe('no results');
          expect(scope.isDone()).toBeTruthy();
          expect(scope.pendingMocks()).toHaveLength(0);
          expect(actualActions).toEqual(expectedActions);
        });
      
    });

  });
  
  // TODO actions.getBookById 测试 

});

