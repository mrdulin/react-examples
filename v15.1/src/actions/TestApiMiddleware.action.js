import {REQUEST, REQUEST_SUCCESS, REQUEST_FAIL} from '../actions/common.action';
import {CALL_API} from '../middlewares/api';

export const FETCH_BOOK_SUCCESS = Symbol('FETCH_BOOK_SUCCESS');
export const FETCH_BOOK_FAILED = Symbol('FETCH_BOOK_FAILED');

export const fetchBookSuccess = (data) => ({
    type: FETCH_BOOK_SUCCESS,
    payload: {  
        data
    }
})

export const fetchBookFail = (err) => ({
    type: FETCH_BOOK_FAILED,
    payload: {
        err
    }
})

export const fetchBook = (query) => ({
    [CALL_API]: {
        types: [FETCH_BOOK_SUCCESS, REQUEST, REQUEST_SUCCESS, REQUEST_FAIL, FETCH_BOOK_FAILED],
        payload: {
            api: `http://it-ebooks-api.info/v1/search/${query}`,
        }
    }
})