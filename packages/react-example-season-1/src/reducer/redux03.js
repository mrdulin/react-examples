const initState = {
	weather: {
		name: '',
		main: {
			temp: ''
		}
	}
};

export const redux03 = (state = initState, action) => {
	switch (action.type) {
		case 'ajax':
			return Object.assign({}, state, {
				weather: action.content
			});
		default:
			return state;
	}
}
