import 'whatwg-fetch';

export const request = (q) => {
    return {type: 'request', q};
};

export const requestSuccess = (data) => {
    return {type: 'requestSuccess', data};
}

export const requestError = (err) => {
    return {type: 'requestError', err};
}

export const getBook = (q) => {;
    const url = `http://it-ebooks-api.info/v1/search/${q}`;

    return dispatch => {
        dispatch(request(q));

        return fetch(url).then(res => res.json()).then(data => {
            dispatch(requestSuccess(data));
        }).catch(err => {
            dispatch(requestError(err));
        });
    }
};
