const initState = {
    books: [],
    err: null
};

export scrollTop = (state = initState, action) => {
    switch (action.type) {
        case 'requestSucess':
            return Object.assign({}, state, {
                books: action.data
            });
        case 'requestError':
            return Object.assign({}, state, {
                err: action.err
            })
        default:
            return state;
    }
};
