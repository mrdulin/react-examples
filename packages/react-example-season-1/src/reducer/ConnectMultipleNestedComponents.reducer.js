import {UPDATE_MESSAGE} from '../actions/ConnectMultipleNestedComponents.action';

const initState = {
    messageA: '',
    messageB: '',
    message: ''
};

export const ConnectMultipleNestedComponents = (state = initState, action) => {
    switch(action.type) {
        case UPDATE_MESSAGE: 
            return Object.assign({}, state, {[action.payload.key]: action.payload.message});
        default: 
            return state;            
    }
}