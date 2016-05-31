import { combineReducers } from 'redux';
import undoable, {distinctState} from 'redux-undo';
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


//通过combineReducers合成reducer后，state的数据结构就为{todos: [], visibilityFilter: ''}
//传入combineReducers的对象的key名就是state对象的key名，combineReducers的对象的key对应的reducer函数名，可以与key名相同，也可以不同，
//与key名相同的好处就是，在使用ES6语法的时候，如果一个对象的key和value相同，那么可以简写为{key},等同于es5的{key: key}

//这里使用了redux-undo模块，用来实现action的undo,redo功能，使用之前的state的todos的数据结构是{todos: []}，
//使用该模块后，它将数据结构转换为{todos: {future: [], history: {...}, present: [], past: []}}
//这时候'todos'reducer操作的应该是present字段对应的数据
const redux01Reducer = combineReducers({
    todos: undoable(todos, { filter: distinctState() }),
    visibilityFilter
});

export default redux01Reducer;
