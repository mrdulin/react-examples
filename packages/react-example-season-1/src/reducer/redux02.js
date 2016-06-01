import {REQUEST_DATA, RECEIVE_DATA, REQUEST_FAIL} from '../actions/redux02';

export const user = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_DATA:
            return action.data
        default:
            return state;
    }
};
