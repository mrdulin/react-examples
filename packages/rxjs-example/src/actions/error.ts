import * as t from '../actionTypes/error';

const addError = (payload: any, meta: string) => ({
  type: t.ADD_ERROR,
  payload,
  meta
});

const removeError = (payload: any) => ({
  type: t.REMOVE_ERROR,
  payload
});

export {
  addError,
  removeError
};
