import * as t from '../actionTypes/cascade';
import { Observable } from 'rxjs/Observable';
import { ajax } from 'rxjs/observable/dom/ajax';
import { ActionsObservable, Epic } from 'redux-observable';
import { IActionPayload, IActionMeta } from '../interfaces';
import { requestPageSuccess, requestPageFail } from '../actions/page';
import { requestModuleById, requestModuleByIdSuccess, requestModuleByIdFail, clearModuleById } from '../actions/module';

const correctUrl: string = '../../mockdata/page.json';

// for error handle testing 
const badUrl: string = '../../mockdata/page.j';

const requestPageEpic: Epic<any, any> = (action$: ActionsObservable<any>) => {
  return action$.ofType(t.REQUEST_PAGE)
    .map((action: IActionPayload<any>): string => action.payload.type)
    .switchMap(() =>
      ajax.getJSON(correctUrl)
        .map(requestPageSuccess).catch(e => {
          const msg: string = e.message || e.toString();
          return Observable.of(requestPageFail(msg));
        })
    );
};

const requestModuleEpic: Epic<any, any> = (action$: ActionsObservable<any>) => {
  return action$.ofType(t.REQUEST_PAGE_SUCCESS)
    .map((action: IActionPayload<any>) => action.payload)
    .switchMap((data: any) => {
      const { modules }: { modules: number[] } = data;
      return Observable.from(modules);
    }).mergeMap((module: any, idx: number) => {
      const id: number = module.id;

      console.log('idx: %s', idx);
      const goodUrl: string = `../../mockdata/module.json?id=${id}`;

      // for error handle testing
      const badUrl: string = '../../mockdata/notExist.json';

      const url: string = id < 3 ? goodUrl : badUrl;

      requestModuleById({ id });
      return ajax.getJSON(url).map((modules: any) => {
        return requestModuleByIdSuccess(modules[id], id);
      }).catch(e => {
        const errMsg: string = e.message || e.toString();
        return Observable.of(requestModuleByIdFail(errMsg, id));
      })
    });
};

const clearModuleByIdEpic: Epic<any, any> = (action$: ActionsObservable<any>) => {
  return action$.ofType(t.CLEAR_MODULE_BY_ID)
    .map((action: IActionPayload<any>): string => action.payload.id)
    .map((id: string) => {
      debugger;
      return clearModuleById(id);
    });
}

export {
  requestPageEpic,
  requestModuleEpic,
  clearModuleByIdEpic
};
