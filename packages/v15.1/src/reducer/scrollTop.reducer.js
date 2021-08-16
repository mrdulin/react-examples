const initState = {
    books: [],
    err: null
};

export const scrollTop = (state = initState, action) => {
    switch (action.type) {
        case 'scrollTop_getBookSuccess':
            const data = action.payload.data;
            return Object.assign({}, state, {
                books: data.Books,
                err: data.Error
            });
        case 'scrollTop_getBookFail':
            return Object.assign({}, state, {
                err: action.payload.err
            })
        default:
            return state;
    }
};
