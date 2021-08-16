const initState = {
    Error: 0,
    Time: 0,
    Total: 0,
    Page: 1,
    Books: [],
    query: ''
};

export const AutoComplete = (state = initState, action) => {
    switch(action.type) {
        case 'autoComplete_fetchAutoCompleteDataSuccess': 
            const {data, query} = action.payload;
            return Object.assign({}, state, {...data, query});
        case 'autoComplete_fetchAutoCompleteDataFail':
            return state;
        default: 
            return state;
    }
}