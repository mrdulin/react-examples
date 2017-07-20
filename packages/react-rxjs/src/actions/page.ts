import * as t from '../actionTypes/cascade';
import {IActionPayload, IActionMeta} from '../interfaces';

const requestPage = (payload: any): IActionPayload<any> => ({
  type: t.REQUEST_PAGE,
  payload
});

const requestPageSuccess = (payload: any): IActionPayload<any> => ({
  type: t.REQUEST_PAGE_SUCCESS,
  payload
});

const requestPageFail = (payload: any): IActionPayload<any> => ({
  type: t.REQUEST_PAGE_FAIL,
  payload,
  error: true
});



export {
  requestPage,
  requestPageSuccess,
  requestPageFail
};
