import * as t from '../actionTypes/cascade';
import { IActionPayload, IActionMeta } from '../interfaces';

const requestModuleById = (): IActionPayload<any> => ({
  type: t.REQUEST_MODULE_BY_ID,
});

const requestModuleByIdSuccess = (payload: any, meta: any): IActionMeta<any, any> => ({
  type: t.REQUEST_MODULE_BY_ID_SUCCESS,
  payload,
  meta
});

const requestModuleByIdFail = (payload: any): IActionPayload<any> => ({
  type: t.REQUEST_MODULE_BY_ID_FAIL,
  payload,
  error: true
});

export {
  requestModuleById,
  requestModuleByIdSuccess,
  requestModuleByIdFail
}
