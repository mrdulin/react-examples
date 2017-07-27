import * as t from '../actionTypes/promiseAll';
import { IActionPayload, IActionBase } from '../interfaces';

const requestData1 = (): IActionBase => ({
  type: t.REQUEST_DATA_1
});

const requestData1Success = (payload: any): IActionPayload<any> => ({
  type: t.REQUEST_DATA_1_SUCCESS,
  payload
});

const requestData1Fail = (payload: any): IActionPayload<any> => ({
  type: t.REQUEST_DATA_1_FAIL,
  payload,
  error: true
});


const requestData2 = (): IActionBase => ({
  type: t.REQUEST_DATA_2
});

const requestData2Success = (payload: any): IActionPayload<any> => ({
  type: t.REQUEST_DATA_2_SUCCESS,
  payload
});

const requestData2Fail = (payload: any): IActionPayload<any> => ({
  type: t.REQUEST_DATA_2_FAIL,
  payload,
  error: true
});

const requestAllData = (names: string[]): IActionPayload<string[]> => ({
  type: t.REQUEST_ALL_DATA,
  payload: names
});

export {
  requestData1,
  requestData1Success,
  requestData1Fail,

  requestData2,
  requestData2Success,
  requestData2Fail,

  requestAllData
};
