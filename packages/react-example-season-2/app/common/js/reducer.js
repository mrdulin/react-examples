export const globalReducer = (state = {
    pagePath: ''
}, action) => {
    switch(action.type) {
        case 'globalAction':
            let sum = 0;
            for(let i = 0; i < 100000; i++) {
                sum += i;
            }
            return Object.assign({}, state, {pagePath: sum});
        default:
            return state;
    }
}
