import {PENDING, FULFILLED, REJECTED} from 'redux-promise-middleware';

const promiseWithStateMiddleware = store => next => action => {
  const excludeActionTypeFlags = ['@@router', PENDING, FULFILLED, REJECTED];
  let isExcludeActionType = false;
  for (let flag of excludeActionTypeFlags) {
    isExcludeActionType = action.type.toString().match(flag);
    if (isExcludeActionType) {
      break;
    }
  }
  if (isExcludeActionType) return next(action);

  next(action);
  return Promise.resolve(store.getState());
};

export default promiseWithStateMiddleware;
