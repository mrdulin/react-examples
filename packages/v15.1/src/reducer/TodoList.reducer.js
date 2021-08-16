const initState = {
    filter: 'SHOW_ALL',
    todos: [],
    todosFiltered: []
}

export const TodoList = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const todos = state.todos;
            const newTodo = {completed: false, text: action.text};
            todos.push(newTodo);
            let todosFiltered = [];
            const todosClone = todos.slice(0);

            switch (filter) {
                case 'SHOW_ALL':
                    todosFiltered = todosClone;
                    break;
                case 'SHOW_COMPLETE':
                    todosFiltered = todosClone.filter(todo => todo.completed);
                    break;
            }

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
