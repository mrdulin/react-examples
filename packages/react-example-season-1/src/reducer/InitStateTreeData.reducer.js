/**
 * Created by dulin on 16/7/29.
 */
const initState = {
    books: ['webpack', 'angular', 'react', 'react-native', 'backbone'],
    page: 0,
    count: 0
};

export const InitStateTreeData = (state = initState, action) => {
    switch (action.type) {
        case 'initData':
            return Object.assign({}, state, {
                page: 0,
                count: 0
            });
        case 'addPage':
            return Object.assign({}, state, {page: action.page});
        default:
            return state;
    }
};