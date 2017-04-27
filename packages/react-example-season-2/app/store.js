import {applyMiddleware, createStore, compose, combineReducers} from 'redux';
import {createReducer} from './reducer';
import * as GlobalReducer from 'common/js/reducer';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

//生产环境redux中间件
let middlewares = [thunkMiddleware];

if (__DEV__) {
	const logger = createLogger({
		duration: true,
		logErrors: true,
		collapsed: true,
		actionTransformer: (action) => ({
			...action,
			type: action.type && action.type.toString()
		})
	});
	middlewares = [
		...middlewares,
		logger
	];
}

let storeEnhancerFunctions = [applyMiddleware(...middlewares)];

if (__DEV__) {
	const devToolsExtension = window.devToolsExtension
		? window.devToolsExtension()
		: f => f;
	storeEnhancerFunctions = [
		...storeEnhancerFunctions,
		devToolsExtension
	]
}

const configureStore = (reducer, preloadedState = {}) => {
	const store = createStore(reducer, preloadedState, compose(...storeEnhancerFunctions));
	store.asyncReducers = {};
	return store;
}

const initialReducer = createReducer(GlobalReducer);
// console.log('initialReducer', initialReducer);
const initStore = configureStore(initialReducer);

///测试多个store
// function reducerB(state = {fxxk: false, kao: false}, action) {
//     switch(action.type) {
//         case 'aaa':
//             return Object.assign({}, state, {fxxk: action.fxxk});
//         case 'bbb':
//             return Object.assign({}, state, {kao: action.kao});
//         default:
//             return state;
//     }
// }
// const storeB = configureStore(
//     combineReducers({
//         reducerB
//     })
// );
// console.log(initStore, storeB);
// console.log(storeB.getState());
// const unsubscribe = storeB.subscribe(() => {
//     console.log(storeB.getState());
// });

// const fxxk = truth => ({type: 'aaa', fxxk: truth});
// const kao = truth => ({type: 'bbb', kao: truth});

// storeB.dispatch(fxxk(true));
// storeB.dispatch(kao(true));

// unsubscribe();
///

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
