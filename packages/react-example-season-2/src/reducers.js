import {combineReducers} from 'redux';

export const createReducer = (asyncReducers) => combineReducers({
    ...asyncReducers
})