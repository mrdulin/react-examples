import {genReducer} from 'app/reducer';

const initState = {
    name: '',
    age: 0
};

// export const juhe_ip = (state = initState, action) => {
//     switch(action.type) {
//         case 'ip_action1':
//             return Object.assign({}, state, {name: 'novaline'});
//         case 'ip_action2':
//             return Object.assign({}, state, {age: 23});
//         default:
//             return state;
//     }
// }

export const ip = genReducer(initState, {
    ip_action1: action1Handler,
    ip_action2: action2Handler
})

export function action1Handler(state, action) {
    return {
        ...state,
        name: 'novaline'
    };
}

export function action2Handler(state, action) {
    return Object.assign({}, state, {age: 23});
}
