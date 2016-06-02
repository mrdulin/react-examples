import {SELECT_CITY, REQUEST_CITY, RECEIVE_CITY} from '../actions/reactRedux01';

export const city = (state = '', action) => {
    switch (action.type) {
        case SELECT_CITY:
            return action.city;
        default:
            return state;
    }
}

export const userId = (state = '', action) => {
    switch (action.type) {
        case REQUEST_CITY:
            return action.userId;
        default:
            return state;
    }
};

export const cityList = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_CITY:
            return action.cityList;
        default:
            return state;
    }
};
