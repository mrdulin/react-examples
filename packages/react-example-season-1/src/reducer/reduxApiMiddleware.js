import {
	REQUEST,
	REQUEST_SUCCESS,
	REQUEST_FAIL
} from '../actions/reduxApiMiddleware';

export const cityMap = (state = {}, action) => {
	switch (action.type) {
		case REQUEST_SUCCESS:
			// console.log('REQUEST_SUCCESS reducer action', action);
			return Object.assign({}, state, action.payload);
		default:
			return state;
	}
};

export const err = (state = {}, action) => {
	switch (action.type) {
		case REQUEST_FAIL:
			return action.payload;
		default:
			return state;
	}
};

export const usr = (state = {usr: {}}, action) => {
	switch (action.type) {
		case 'LOGIN_SUCCESS':
			return Object.assign({}, state, {
				usr: action.payload
			});
		default:
			return state;
	}
};
