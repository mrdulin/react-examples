import {CALL_API} from 'redux-api-middware';
import {SELECT_CITY} from './reactRedux01';

export const REQUEST = 'REQUEST';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAIL = 'REQUEST_FAIL';

export const requestCity = () => {
    return {
        [CALL_API]: {
            endpoint: './json/cityMap.api.json',
            method: 'GET',
            types: [REQUEST, REQUEST_SUCCESS, REQUEST_FAIL]
        }
    }
};

export const select_city = (cityKey) => {
    return {type: SELECT_CITY, cityKey};
};
