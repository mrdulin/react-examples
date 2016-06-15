const initState = {
    book: {}
};

export const reactRedux03 = (state = initState, action) => {
    switch (action.type) {
        case 'reactRedux03_getBook':
            return {
                ...state.book,
                book: {
                    name: 'react by examples',
                    author: 'novaline'
                }
            };
        case 'reactRedux03_deleteBook':
            return {
                ...state.book,
                book: {}
            };
        default:
            return state;
    }
}
