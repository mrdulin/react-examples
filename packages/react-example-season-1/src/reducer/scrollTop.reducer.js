const initState = {
    books: [],
    err: null
};

export const scrollTop = (state = initState, action) => {
    switch (action.type) {
        case 'requestSuccess':
            const data = action.data;
            return Object.assign({}, state, {
                books: data.Books,
                err: data.Error
            });
        case 'requestError':
            return Object.assign({}, state, {
                err: action.err
            })
        default:
            return state;
    }
};
