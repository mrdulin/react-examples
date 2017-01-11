import { applyMiddleware, createStore, compose } from 'redux';
import { createReducer } from './reducer';

let middlewares = [
    //生产环境redux中间件
];

if (__DEV__) {
    const createLogger = require('redux-logger');
    const logger = createLogger({
        level: 'info',
        duration: true,
        timestamp: true,
        collapsed: true
    });
    middlewares = [...middlewares, logger];
}

let storeEnhancerFunctions = [
    applyMiddleware(...middlewares)
];

if (__DEV__) {
    const devToolsExtension = window.devToolsExtension ? window.devToolsExtension() : f => f;
    storeEnhancerFunctions = [
        ...storeEnhancerFunctions,
        devToolsExtension
    ]
}

const configureStore = (reducer, preloadedState = {}) => {
    const store = createStore(
        reducer,
        preloadedState,
        compose(...storeEnhancerFunctions)
    );
    store.asyncReducers = {};
    return store;
}

const initialReducer = createReducer();
const initStore = configureStore(initialReducer);

/**
 * @desc 异步加载reducer
 * @param store {Object} redux的store
 * @param name {String|Object} reducer名称，或者是一个{reducer名称： reducer纯函数}的map
 * @param asyncReducer {Function} reducer纯函数
 */
export const injectAsyncReducer = (name, asyncReducer, store = initStore) => {
    if (typeof name === 'string' && typeof asyncReducer === 'function') {
        store.asyncReducers[name] = asyncReducer;
    }
    if (Object.prototype.toString.call(name) === "[object Object]") {
        store.asyncReducers = name;
    }
    const reducer = createReducer(store.asyncReducers);
    store.replaceReducer(reducer);
}

export default initStore;
