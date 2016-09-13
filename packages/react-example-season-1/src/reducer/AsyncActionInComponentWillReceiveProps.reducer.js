/**
 * Created by dulin on 16/8/19.
 */
const initState = {
    isLoading: false,
    loadMessage: '',
    cities: {},
    key: 1,
    showMsg: false
};

export const AsyncActionInCWRP = (state = initState, action) => {
    switch (action.type) {
        case 'requestCity':
            return Object.assign({}, state, {isLoading: true, showMsg: true, key: action.key});
        case 'requestCitySuccess':
            return Object.assign({}, state, {cities: action.cityData, isLoading: false, loadMessage: '请求成功'});
        case 'requestCityFail':
            return Object.assign({}, state, {loadMessage: action.err.errMsg, isLoading: false});
        case 'requestCityFinish':
            return Object.assign({}, state, {showMsg: false});
        default:
            return state;
    }
};