export const SELECT_CITY = 'SELECT_CITY';
export const REQUEST_CITY = 'REQUEST_CITY';
export const RECEIVE_CITY = 'RECEIVE_CITY';
export const REQUEST_CITY_FAIL = 'REQUEST_CITY_FAIL';

export const selectCity = (city) => {
    return {type: SELECT_CITY, city};
};

export const requestCity = (userId) => {
    return {type: REQUEST_CITY, userId};
};

export const receiveCity = (cityList) => {
    return {type: RECEIVE_CITY, cityList};
};

export const requestCityFail = (err) => {
    return {type: REQUEST_CITY_FAIL, err};
};

export const fetchCity = (userId) => {
    const url = './json/city.api.json';
    return dispatch => {
        dispatch(requestCity(userId));

        return fetch(url).then(res => res.json()).then(data => {
            const cityList = data.data;
            dispatch(receiveCity(cityList));
        }).catch(err => {
            dispatch(requestCityFail(err));
        });
    }
};
