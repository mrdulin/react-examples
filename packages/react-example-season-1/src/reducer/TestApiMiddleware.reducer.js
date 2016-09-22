import {FETCH_BOOK_SUCCESS, FETCH_BOOK_FAILED} from '../actions/TestApiMiddleware.action';

const initState = {
    Books: []
};

export const TestApiMiddleware = (state = initState, action) => {
    switch(action.type) {
        case FETCH_BOOK_SUCCESS: 
            return Object.assign({}, state, {Books: action.res.Books});
        case FETCH_BOOK_FAILED: 
            return Object.assign({}, state);
        default: 
            return state;
    }
}