import {LOGIN} from '../actions/InjectStateToEs5ComponentMixins.action';

const initState = {
    token: '',
    user: {}
};

export const InjectStateToEs5ComponentMixins = (state = initState, action) => {
    switch(action.type) {
        case LOGIN: 
            return Object.assign({}, state, {token: '7b47d1e4f7a0a9ef569e', user: {name: action.payload.user.username}});
        default: 
            return state;
    }
};
