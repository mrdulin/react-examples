import {REQUEST, REQUEST_SUCCESS, REQUEST_FAIL} from '../actions/common.action';

const initState = {
    loading: false
};

export const Common = (state = initState, action) => {
    switch(action.type) {
        case REQUEST:
            return Object.assign({}, state, {loading: true});
        case REQUEST_SUCCESS: 
            return Object.assign({}, state, {loading: false});
        case REQUEST_FAIL:
            return Object.assign({}, state, {loading: false});
        default:  
            return state;
    }
}