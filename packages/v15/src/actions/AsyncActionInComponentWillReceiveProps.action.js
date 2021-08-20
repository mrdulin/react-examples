import {request, requestSuccess, requestFail} from './common.action';

export const fetchCitySuccess = data => ({
    type: 'AAICWRP_fetchCitySuccess',
    payload: {
        data
    }
})

export const fetchCityFail = err => ({
    type: 'AAICWRP_fetchCityFail',
    payload: {
        err
    }
});

export const fetchCity = () => (dispatch, getState) => {
    dispatch(request());
    const cityMap = {
        'shanghai': '上海',
        'chengdu': '成都',
        'beijing': '北京',
        'New York': '纽约',
        'taiwan': '台湾'
    };
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(cityMap);
        }, 2000);
    }).then(
        data => {
            dispatch(requestSuccess())
            dispatch(fetchCitySuccess(data))
            return Promise.resolve(getState());
        }
    ).catch(
        err => {
            dispatch(requestFail())
            dispatch(fetchCityFail(err))
            return Promise.reject(getState());
        }
    )
}
