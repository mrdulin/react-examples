import {combineReducers} from 'redux';
import {SELECT_SUBREDDIT} from '../actions/reddit';

const selectSubreddit = (state = 'reactjs', action) => {
    switch (action.type) {
        case SELECT_SUBREDDIT:
            return action.subreddit;
        default:
            return state;
    }
};

const postsBySubreddit = (state = {
    isFetching: false,
    didInvalidate: false,
    items: []
}, action) => {
    switch (action.type) {
        case expression:

            break;
        default:

    }
};
