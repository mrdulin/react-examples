import {REQUEST_DATA, RECEIVE_DATA, REQUEST_FAIL, OPEN_POLLING} from '../actions/redux02';

export const user = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_DATA:
            return action.data
        default:
            return state;
    }
};

export const polling = (state = false, action) => {
    switch (action.type) {
        case OPEN_POLLING:
            return action.isOpen;
        default:
            return state;
    }
}