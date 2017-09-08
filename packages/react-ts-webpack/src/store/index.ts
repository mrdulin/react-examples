import {createStore, applyMiddleware, Store, Middleware} from 'redux';
import rootReducer from '../reducers';
import {createLogger} from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import promiseWithStateMiddleware from 'middlewares/promise';
import thunk from 'redux-thunk';
import {IState} from 'reducers';

let middlewares: Middleware[] = [promiseMiddleware(), promiseWithStateMiddleware, thunk];

if (process.env.NODE_ENV === 'development') {
  const logger: Middleware = createLogger({});
  middlewares = [...middlewares, logger];
}

const store: Store<IState> = createStore<IState>(
  rootReducer,
  applyMiddleware(...middlewares)
);

export default store;
