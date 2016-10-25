import {applyMiddleware, createStore} from 'redux';
import {createReducer} from './reducers';
import createLogger from 'redux-logger';

const logger = createLogger();

export const configureStore = initialState => {
    const store = createStore(createReducer(), initialState, applyMiddleware(logger));
    store.asyncReducers = {};
    return store;
}

export const injectAsyncReducer = (store, name, asyncReducer) => {
    store.asyncReducers[name] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers));
}

export default configureStore();
