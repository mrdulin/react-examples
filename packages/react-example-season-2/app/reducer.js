import {combineReducers} from 'redux';

const global = (state = {
    pagePath: ''
}, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export const createReducer = (asyncReducers) => combineReducers({
    ...asyncReducers,
    global
})

/**
 * @desc reducer switch..case helper
 */
export const genReducer = (initState, handlers) => (state = initState, action) => {
    if(handlers.hasOwnProperty(action.type)) {
        return handlers[action.type](state, action);
    } else {
        return state;
    }
}



