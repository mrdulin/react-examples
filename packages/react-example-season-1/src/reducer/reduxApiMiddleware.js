import {REQUEST, REQUEST_SUCCESS, REQUEST_FAIL} from '../actions/reduxApiMiddleware';

export const cityMap = (state = {}, action) => {
    switch (action.type) {
        case REQUEST_SUCCESS:
            // console.log('REQUEST_SUCCESS reducer action', action);
            return action.payload;
        default:
            return state;
    }
};

export const err = (state = {}, action) => {
    switch (action.type) {
        case REQUEST_FAIL:
            return action.payload;
        default:
            return state;
    }
};

export const usr = (state = {}, action) => {
    switch (action.type) {
        case REQUEST_SUCCESS:
            return action.usr;
        default:
            return state;
    }
};
