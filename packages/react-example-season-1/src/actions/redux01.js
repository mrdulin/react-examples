import {makeActionCreator} from './makeActionCreator';

export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETE: 'SHOW_COMPLETE',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const addTodo = makeActionCreator(ADD_TODO, 'text');
export const completeTodo = makeActionCreator(COMPLETE_TODO, 'index')
export const toggleTodo = makeActionCreator(TOGGLE_TODO, 'index');
export const setVisibilityFilter = makeActionCreator(ADD_TODO, 'filter');
