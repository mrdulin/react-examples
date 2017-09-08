/**
 * Created by dulin on 2017/6/28.
 */
import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware';
import { ActionMeta } from 'redux-actions';
import { IState } from 'reducers';

const createPromiseWithStateMiddleware = function (...args: any[]) {

  return ({ dispatch, getState }: any) => (next: any) => (action: any) => {

    const excludeActionTypeFlags: string[] = ['@@router', PENDING, FULFILLED, REJECTED];
    let isExcludeActionType: boolean = false;
    for (const flag of excludeActionTypeFlags) {
      const matchResult: number = action.type.indexOf(flag);
      if (matchResult > 0) {
        isExcludeActionType = matchResult > 0;
        break;
      }
    }
    if (isExcludeActionType) {
      return next(action);
    }

    next(action);
    return Promise.resolve({
      state: getState(),
      dispatch
    });
  };
};

const promiseWithStateMiddleware = createPromiseWithStateMiddleware();

export default promiseWithStateMiddleware;
