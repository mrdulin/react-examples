const initState = {
    name: '',
    age: 0
};

export const juhe_ip = (state = initState, action) => {
    switch(action.type) {
        case 'ip_action1':
            return Object.assign({}, state, {name: 'novaline'});
        case 'ip_action2':
            return Object.assign({}, state, {age: 23});
        default:
            return state;
    }
}