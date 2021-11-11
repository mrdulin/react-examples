import {request, requestSuccess, requestFail} from './common.action';

export const getBookSuccess = (data) => ({
    type: 'scrollTop_getBookSuccess',
    payload: {
        data
    }
})

export const getBookFail = (err) => ({
    type: 'scrollTop_getBookFail',
    payload: {
        err
    }
})

export const getBook = (q) => (dispatch, getState) => {
    const url = `http://it-ebooks-api.info/v1/search/${q}`;
    dispatch(request());

    return fetch(url).then(res => res.json()).then(data => {
        dispatch(requestSuccess());
        dispatch(getBookSuccess(data));
        return Promise.resolve(getState());
    }).catch(err => {
        dispatch(requestFail());
        dispatch(getBookFail(err));
        return Promise.reject(getState());
    });
}
