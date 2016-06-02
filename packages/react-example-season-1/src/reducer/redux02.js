import {REQUEST_DATA, RECEIVE_DATA, REQUEST_FAIL, TOGGLE_POLLING} from '../actions/redux02';

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
        case TOGGLE_POLLING:
            return action.isOpen;
        default:
            return state;
    }
}
