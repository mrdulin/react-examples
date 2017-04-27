import {combineReducers} from 'redux';

export const createReducer = (asyncReducers) => {
	if (Object.prototype.toString.call(asyncReducers) !== "[object Object]") {
		throw new TypeError('Function "createReducer" params "asyncReducers" must be a object type');
	}
	asyncReducers = logSlowReducer(asyncReducers);
	return combineReducers({
		...asyncReducers
	});
}

/**
 * @desc reducer switch..case helper
 */
export const genReducer = (initState, handlers) => (state = initState, action) => {
	if (handlers.hasOwnProperty(action.type)) {
		return handlers[action.type](state, action);
	} else {
		return state;
	}
}

/**
 * 计算action对应switch case处理的时间
 * 超出一定ms，控制台报warning
 * 不过貌似redux-logger middleware已经干了这事
 *
 * @param {object} reducers 同步和异步加载的reducer， {reducerName: function() {}}
 * @param {*} thresholdInMs 临界值
 */
export const logSlowReducer = (reducers, thresholdInMs = 0.01) => {
	Object.keys(reducers).forEach(name => {
		const originalReducer = reducers[name];
		reducers[name] = (state, action) => {
			const start = Date.now();
			//这里得到的result，是reducer的switch case中的default分支，计算这里执行的时间貌似没什么卵用
			const result = originalReducer(state, action);
			const diffInMs = Date.now() - start;
			// console.log(start, diffInMs);
			if (diffInMs >= thresholdInMs) {
				console.warn('Reducer "' + name + '" took ' + diffInMs + 'ms for ' + action.type.toString());
			}
			return result;
		}
	});

	return reducers;
};
