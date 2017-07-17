import {createStore, applyMiddleware, Middleware, Store} from 'redux';
import { createEpicMiddleware, EpicMiddleware } from 'redux-observable';
import { browserHistory } from 'react-router';

import rootReducer from './reducer';
import rootEpic from './epic';

const epicMiddleware: EpicMiddleware<any, any> = createEpicMiddleware<any, any>(rootEpic);
const middlewares: Middleware[] = [epicMiddleware];

function configureStore(): Store<any> {
  const store: Store<any> = createStore<any>(
    rootReducer,
    applyMiddleware(
      ...middlewares
    )
  )
  return store;
}

export default configureStore;
