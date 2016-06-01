export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const REQUEST_FAIL = 'REQUEST_FAIL';

export const requestData = (params) => {
    return {
        type: REQUEST_DATA,
        params
    };
};

export const receiveData = (data) => {
    return {type: RECEIVE_DATA, data};
};

export const requestFail = (err) => {
    return {type: REQUEST_FAIL, err};
};

export const fetchData = () => {
    const url = './json/redux02.api.json';

    return dispatch => {
        return fetch(url)
        .then(data => data.json())
        .then(json => {
            dispatch(receiveData(json));
        }).catch((err) => {
            dispatch(requestFail(err));
        })
    }
};
