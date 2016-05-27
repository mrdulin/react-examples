export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFIlters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETE: 'SHOW_COMPLETE',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const addTodo = (text) => ({type: ADD_TODO, text});
export const completeTodo = (index) => ({type: COMPLETE_TODO, index});
export const toggleTodo = (index) => ({type: TOGGLE_TODO, index});
export const setVisibilityFilter = (filter) => ({type: SET_VISIBILITY_FILTER, filter});
