/**
 * Created by dulin on 17/1/19.
 */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { global } from './reducers';

const logger = createLogger();

const middlewares = [logger, thunk];

export default function configureStore(preloadedState) {
  const store = createStore(
    global,
    preloadedState,
    applyMiddleware(...middlewares)
  );
  return store;
}
