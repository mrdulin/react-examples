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

export const fetchCity = () => (dispatch, getState, {api_host}) => {
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
    }).then(data => {
        return dispatch(requestSuccess()).then(() => dispatch(fetchCitySuccess(data)));
    }).catch(err => {
        return dispatch(requestFail()).then(() => dispatch(fetchCityFail(err)));
    });
}
