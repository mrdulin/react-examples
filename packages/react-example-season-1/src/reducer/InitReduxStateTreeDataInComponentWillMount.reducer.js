/**
 * Created by dulin on 16/7/29.
 */
const initState = {
    books: ['webpack', 'angular', 'react', 'react-native', 'backbone'],
    page: 0,
    count: 0
};

export const InitReduxStateTreeDataInComponentWillMount = (state = initState, action) => {
    switch (action.type) {
        case 'InitReduxStateTreeDataInComponentWillMount_initState':
            return Object.assign({}, state, {
                books: ['webpack', 'angular', 'react', 'react-native', 'backbone'],
                page: 0,
                count: 0
            });
        case 'InitReduxStateTreeDataInComponentWillMount_addPage':
            return Object.assign({}, state, {page: action.page});
        case 'InitReduxStateTreeDataInComponentWillMount_deleteBook':
            const booksClone = state.books.slice(0);
            booksClone.splice(action.index, 1);
            return Object.assign({}, state, {books: booksClone})
        default:
            return state;
    }
};