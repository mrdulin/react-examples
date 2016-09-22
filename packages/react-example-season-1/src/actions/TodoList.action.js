const makeActionCreator = util.makeActionCreator;

export const addTodo = makeActionCreator('todolist_addTodo', 'text');
export const toggleTodo = makeActionCreator('todolist_toggleTodo', 'index');
export const completeAllTodos = makeActionCreator('todolist_completeAllTodos');
export const deleteTodo = makeActionCreator('todolist_deleteTodo', 'index');
export const clearCompleted = makeActionCreator('todolist_clearCompleted');
export const setFilter = makeActionCreator('todolist_setFilter', 'filter');
