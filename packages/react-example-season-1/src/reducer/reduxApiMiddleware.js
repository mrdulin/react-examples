import {REQUEST, REQUEST_SUCCESS, REQUEST_FAIL} from '../actions/reduxApiMiddleware';
import {SELECT_CITY} from '../actions/reactRedux01';

export cityMap = (state = {}, action) => {
    switch (action.type) {
        case REQUEST_SUCCESS:
            console.log('payload', action);
            return action.payload;
        default:
            return state;
    }
};

export cityKey = (state = '', action) => {
    switch (action.type) {
        case SELECT_CITY:
            return action.cityKey
        default:
            return state;
    }
}
