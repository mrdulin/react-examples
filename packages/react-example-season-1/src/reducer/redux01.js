import { combineReducers } from 'redux';
import { ADD_TODO, COMPLETE_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters} from '../actions/redux01';

const SHOW_ALL = VisibilityFilters.SHOW_ALL;

const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {text: action.text, completed: false}
            ]
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if(index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    });
                }
                return todo;
            });
        case COMPLETE_TODO:
            return state.map((todo, index) => {
                return index === action.index ? Object.assign({}, todo, {completed: true}) : todo;
            });
        default:
            return state;
    }
};

const visibilityFilter = (state = SHOW_ALL, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
};

const redux01Reducer = combineReducers({todos, visibilityFilter});

export default redux01Reducer;
