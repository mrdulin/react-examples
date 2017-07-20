import * as t from '../actionTypes/cascade';
import { IActionPayload, IActionMeta } from '../interfaces';

const requestModuleById = (payload: any): IActionPayload<any> => ({
  type: t.REQUEST_MODULE_BY_ID,
  payload
});

const requestModuleByIdSuccess = (payload: any, meta: any): IActionMeta<any, number> => ({
  type: t.REQUEST_MODULE_BY_ID_SUCCESS,
  payload,
  meta
});

const requestModuleByIdFail = (payload: any, meta: number): IActionMeta<any, number> => ({
  type: t.REQUEST_MODULE_BY_ID_FAIL,
  payload,
  error: true,
  meta
});

const clearModuleById = (id: string): IActionPayload<any> => ({
  type: t.CLEAR_MODULE_BY_ID,
  payload: {
    id
  }
})

export {
  requestModuleById,
  requestModuleByIdSuccess,
  requestModuleByIdFail,
  clearModuleById
};
