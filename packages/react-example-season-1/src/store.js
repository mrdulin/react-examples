import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducer/index';
//webpack未开启noParse
import createLogger from 'redux-logger';
// const createLogger = require('redux-logger');

//使用ES6
// import thunk from 'redux-thunk';
//使用commonjs
const thunk = require('redux-thunk').default;

import {apiMiddleware} from 'redux-api-middleware';
import {ajaxMiddleware} from './middlewares/ajaxMiddleware';

const api_host = 'http://www.google.com';
let middlewares = [apiMiddleware, ajaxMiddleware, thunk.withExtraArgument({api_host})];
if(__DEV__) {
    //如果action常量是Symbol类型，那么会报错： Uncaught (in promise) TypeError: Cannot convert a Symbol value to a string
    //解决方法: 如下，将Symbol类型转换成字符串
    const logger = createLogger({
        actionTransformer: (action) => ({
            ...action,
            type: String(action.type),
        })
    });
    middlewares = [...middlewares, logger];
}

//logger中间件必须放在所有中间件的最后，否则它会打印出thunk和promise中间件的一些操作，而不是action
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
const store = createStoreWithMiddleware(rootReducer);

export default store;