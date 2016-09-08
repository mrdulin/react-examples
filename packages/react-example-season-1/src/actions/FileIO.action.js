import * as Action from './common.action';

export const uploadFilesSuccess = ({key}) => {
    return {
        type: 'FileIO_uploadFilesSuccess',
        payload: {
            key
        }
    }
}

export const uploadFilesFail = (err) => {
    return {
        type: 'FIleIO_uploadFilesFail',
        payload: {
            err
        },
        error: true
    };
}

export const uploadFiles = (formData) => {
    return (dispatch, state) => {
        const url = 'http://file.io';
        dispatch(Action.request());

        return fetch(url, {
            method: 'POST',
            body: formData
        }).then(res => {
            return res.json();
        }).then(json => {
            if(json.success) {
                dispatch(uploadFilesSuccess(json)).then(() => dispatch(Action.requestSuccess()));
            } else {
                return Promise.reject(json);
            }
        }).catch(err => {
            dispatch(uploadFilesFail(err)).then(() => dispatch(Action.requestFail()))
        });
    }
}

