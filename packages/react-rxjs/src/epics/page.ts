import * as t from '../actionTypes/cascade';
import { Observable } from 'rxjs/Observable';
import { ajax } from 'rxjs/observable/dom/ajax';
import { ActionsObservable, Epic } from 'redux-observable';
import { IActionPayload } from '../interfaces';
import { requestPageSuccess, requestPageFail } from '../actions/page';

const correctUrl: string = '../../mockdata/page.json';

// for error handle testing 
const badUrl: string = '../../mockdata/page.j';

const requestPageEpic = (action$: ActionsObservable<any>) => {
  return action$.ofType(t.REQUEST_PAGE)
    .map((action: IActionPayload<any>) => action.payload.type)
    .mergeMap(() =>
      ajax.getJSON('')
        .map(requestPageSuccess).catch(e => {
          const msg = e.message || e.toString();
          return Observable.of(requestPageFail(msg));
        })
    );
};

export {
  requestPageEpic
};

