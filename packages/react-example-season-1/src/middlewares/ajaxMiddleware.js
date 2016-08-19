const ajaxMiddleware = ({
	getState,
	dispatch
}) => next => action => {
	// console.log('middleware', next, action);

	if (action.type !== 'ajax') return next(action);
	fetch(action.url, {
			method: action.method
		})
		.then(res => res.json())
		// .then(json => action.cb(json, store.dispatch));
		.then(json => {
			action.content = json;
			return next(action);
		})
}

//es5
var middlewware = function middlewware(store) {
	return function(next) {
		return function(action) {
			if (action.type !== 'ajax') return next(action);
		};
	};
};

export {
	ajaxMiddleware
};
