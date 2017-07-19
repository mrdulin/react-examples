import * as t from '../actionTypes/book';
import { Observable } from 'rxjs/Observable';
import { ajax } from 'rxjs/observable/dom/ajax';
import { ActionsObservable, Epic } from 'redux-observable';
import { requestBooksSuccess, requestBooksFail } from '../actions/book';
import { addError, removeError } from '../actions/error';

interface IErrorMessage {
  [code: number]: string;
}

const errorMessage: IErrorMessage = {
  1: '错误1',
  2: '错误2'
};

const requestBooksEpic = (action$: ActionsObservable<any>) => {
  return action$.ofType(t.REQUEST_BOOKS)
    .mergeMap((action: any) => action.payload.names)
    .filter((name: string): boolean => typeof name === 'string' && name.length > 0)
    .mergeMap(requestBookByName)
};

function requestBookByName(name: string, idx: number) {
  // 模拟接口地址错误，用来测试异常流程
  const url: string = idx < 2 ? `http://it-ebooks-api.info/v1/search/${name}` : 'http://it-ebooks-api.info/v1';
  return ajax.getJSON(url).map((data: any) => {
    const { Books, Total, Error: error } = data;
    const errorNo: number = Number.parseInt(error, 10);
    if (typeof errorNo === 'number' && errorNo !== 0) {
      throw errorMessage[error];
    } else if (typeof errorNo !== 'number') {
      throw error;
    }
    return requestBooksSuccess({ Books, Total }, name);
  }).catch((err: any) => {
    const msg: string = err.message || err;
    return Observable.of(requestBooksFail(msg, name));
  });
}

export {
  requestBooksEpic
};
