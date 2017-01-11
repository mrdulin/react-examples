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

