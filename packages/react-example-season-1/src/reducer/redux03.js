const initState = {

}

export const redux03 = (state = initState, action) => {
	switch(action.type) {
		case 'ajax': 
			return state;
		default:
			return state;
	}
}