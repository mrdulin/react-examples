const initState = {
    user: {},
    other: '123'
};

export const reactRedux02 = (state = initState, action) => {
    switch (action.type) {
        case 'reactRedux02_getUser':
            return Object.assign({}, state, {user: {name: 'novaline', age: 23}});
        case 'reactRedux02_deleteUser':
            return Object.assign({}, state, {user: {}});
        default:
            return state;
    }
};
