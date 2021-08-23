import * as t from '../actionTypes/promiseAll';
import { Observable } from 'rxjs/Observable';
import { ajax } from 'rxjs/observable/dom/ajax';
import { ActionsObservable, Epic } from 'redux-observable';
import { requestData1Success, requestData2Success } from '../actions/promiseAll';

const fetchData1 = () => (action$: ActionsObservable<any>, store: any) => (
  ajax.getJSON('../../mockData/promiseAll/data1.json').map((data: any) => {
    return requestData1Success(data);
  })
);
const fetchData2 = () => (action$: ActionsObservable<any>, store: any) => (
  ajax.getJSON('../../mockData/promiseAll/data2.json').map((data: any) => {
    return requestData2Success(data);
  })
)

const requestAllDataEpic = (action$: ActionsObservable<any>, store: any) => {
  return action$.ofType(t.REQUEST_ALL_DATA)
    .map((action) => action.payload)
    .switchMap((names: string[]) => {
      console.log(names);

      return Observable.forkJoin([
        fetchData1()(action$, store),
        fetchData2()(action$, store)
      ])
        .map((results: any[]) => {
          const [action1, action2] = results;
          requestData1Success(action1);
          requestData2Success(action2);

        });
    });
};

export {
  requestAllDataEpic
};
