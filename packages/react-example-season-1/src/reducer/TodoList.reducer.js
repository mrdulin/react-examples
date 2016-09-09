const initState = {
    filter: 'SHOW_ALL',
    todos: [],
    todosFiltered: []
}

export const TodoList = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TODO':

            return Object.assign({}, state, {todos})
        default:
            return state;
    }
}

// export const todos = (state = [], action) => {
//     switch (action.type) {
//         case ADD_TODO:
//             return [
//                 ...state,
//                 {text: action.text, completed: false}
//             ]
//         case TOGGLE_TODO:
//             return state.map((todo, index) => {
//                 if(index === action.index) {
//                     return Object.assign({}, todo, {
//                         completed: !todo.completed
//                     });
//                 }
//                 return todo;
//             });
//         case COMPLETE_TODO:
//             return state.map((todo, index) => {
//                 return index === action.index ? Object.assign({}, todo, {completed: true}) : todo;
//             });
//         default:
//             return state;
//     }
// };

// export const visibilityFilter = (state = SHOW_ALL, action) => {
//     switch (action.type) {
//         case SET_VISIBILITY_FILTER:
//             return action.filter;
//         default:
//             return state;
//     }
// };
