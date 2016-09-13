export const fetchAutoCompleteDataSuccess = (data, query) => ({
    type: 'autoComplete_fetchAutoCompleteDataSuccess',
    payload: {data, query}
});

export const fetchAutoCompleteDataFail = (err) => ({
    type: 'autoComplete_fetchAutoCompleteDataFail',
    payload: {err},
    error: true
})

export const fetchAutoCompleteData = (query = '', number = 1) => (dispatch, state) => {
    const url = `http://it-ebooks-api.info/v1/search/${query}/page/${number}`;

    return fetch(url).then(res => res.json()).then(data => {
        if(data.Error !== '0') {
            return Promise.reject(data.Error);
        } else {
            dispatch(fetchAutoCompleteDataSuccess(data, query));
        }
    }).catch(err => {
        dispatch(fetchAutoCompleteDataFail(err));
    });
}