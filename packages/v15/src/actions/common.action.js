const makeActionCreator = util.makeActionCreator;

export const REQUEST = 'REQUEST';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAIL = 'REQUEST_FAIL';

export const request = makeActionCreator(REQUEST, 'loading');
export const requestSuccess = makeActionCreator(REQUEST_SUCCESS, 'loading');
export const requestFail = makeActionCreator(REQUEST_FAIL, 'loading');