const initState = {
    book: {}
};

export const reactRedux03 = (state = initState, action) => {
    switch (action.type) {
        case 'MapDispatchToProps_getBook':
            return {
                ...state.book,
                book: {
                    name: 'react by examples',
                    author: 'novaline'
                }
            };
        case 'MapDispatchToProps_deleteBook':
            return {
                ...state.book,
                book: {}
            };
        default:
            return state;
    }
}
