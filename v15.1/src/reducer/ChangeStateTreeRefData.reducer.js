const initState = {
    editor: {
        name: 'vscode',
        company: 'Microsoft'
    },
    user: 'novaline'
};

export const ChangeStateTreeRefData = (state = initState, action) => {
    switch(action.type) {
        default: 
            return state;
    }   
};