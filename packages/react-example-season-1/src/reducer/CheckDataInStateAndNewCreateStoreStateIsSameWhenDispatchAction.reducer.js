const initState = {
    name: ''
}

export const CDSANCSSSWDA = (state = initState, action) => {
    switch(action.type) {
        case 'CDSANCSSSWDA_updateFoodName':
            return Object.assign({}, state, {name: action.payload.name})
        default: 
            return state;
    }
}