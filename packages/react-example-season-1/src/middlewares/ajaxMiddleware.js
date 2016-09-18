//ES6
//中间件的getState,dispatch参数是redux的applyMiddleware方法注入的
const ajaxMiddleware = ({
	getState,
	dispatch
}) => next => action => {
	// console.log('middleware', next, action);
	const prevState = getState();
	const returnValue = next(action);
	const nextState = getState();
	return returnValue;
}	

//es5
var middlewware = function middlewware(store) {
	return function(next) {
		return function(action) {
			return next(action);
		};
	};
};

export {
	ajaxMiddleware
};


//next 源码

/**
 * function (action) {
		if (typeof action === 'function') {
			return action(dispatch, getState, extraArgument);
		}

		return next(action);
	}
 */