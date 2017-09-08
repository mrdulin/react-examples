import { createAction } from 'redux-actions';
import * as t from '../actionTypes';
import * as fetch from 'isomorphic-fetch';

const request = (status: boolean) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status) {
        resolve('success');
      } else {
        reject('failed');
      }
    }, 2000);
  });
};

const req1 = createAction(
  t.REQUEST_ONE,
  async (status: boolean) => {
    try {
      return await request(status);
    } catch (err) {
      throw err;
    }
  }
);

const req2 = createAction(
  t.REQUEST_TWO,
  async (status: boolean) => {
    try {
      return await request(status);
    } catch (err) {
      throw err;
    }
  }
);

const req2Fallback = createAction(t.REQUEST_TWO_FALLBACK, (value: string) => Promise.resolve(value));

export {
  req1,
  req2,
  req2Fallback
};
