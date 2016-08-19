/**
 * Created by dulin on 16/8/19.
 */
import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducer/index';
//webpack未开启noParse
import createLogger from 'redux-logger';
// const createLogger = require('redux-logger');
import thunk from 'redux-thunk';
import {apiMiddleware} from 'redux-api-middleware';
import {ajaxMiddleware} from './middlewares/ajaxMiddleware';


const logger = createLogger();

//logger中间件必须放在所有中间件的最后，否则它会打印出thunk和promise中间件的一些操作，而不是action
const createStoreWithMiddleware = applyMiddleware(apiMiddleware, ajaxMiddleware, thunk, __DEV__ ? logger : null)(createStore);
const store = createStoreWithMiddleware(rootReducer);

export default store;