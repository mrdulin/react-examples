import 'whatwg-fetch';

const ajaxMiddleware = store => next => action => {
	console.log('middleware next is ', next);
	if(action.type !== 'ajax') return next(action);

	console.log('middleware store is ', store);

	fetch(action.url, {
		method: action.method
	})
	.then(res => res.json())
	.then(json => action.cb(json, store.dispatch));
}

export {ajaxMiddleware};