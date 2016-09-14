const initState = {
    cityMap: {}
};

export const AsyncActionInCWRP = (state = initState, action) => {
    switch (action.type) {
        case 'AAICWRP_fetchCitySuccess':
            return Object.assign({}, state, {cityMap: action.payload.data});
        case 'AAICWRP_fetchCityFail':
            return Object.assign({}, state, {});
        default:
            return state;
    }
};