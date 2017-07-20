import * as t from '../actionTypes/wikipedia';
import { Observable } from 'rxjs/Observable';
import { ajax } from 'rxjs/observable/dom/ajax';
import { ActionsObservable, Epic } from 'redux-observable';
import { receiveWikipedia, clearWikipedia } from '../actions/wikipedia';
import { replace } from 'react-router-redux';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/mergeMap';

const searchWikipediaEpic: Epic<any, any> = (action$: ActionsObservable<any>): Observable<any> => {
  return action$.ofType(t.SEARCH_WIKIPEDIA)
    .map((action: any) => action.payload.query)
    // 过滤空值
    .filter((q: string): boolean => q.length > 0)
    // 当值改变时才发射该值，例如用户输入aaa -> aaab -> aaa，最终的值和初始值相同，不发射
    .distinctUntilChanged()
    .switchMap((q: string): Observable<any> => {
      const url: string = `/clearbit/api?query=${q}`;
      // 两次发射值的间隔时间
      return Observable.timer(1000)
        .mergeMap(() => Observable.merge(
          Observable.of(replace(`/search?q=${q}`)),
          ajax.getJSON(url)
            .map(receiveWikipedia)
            .takeUntil(action$.ofType(t.CLEAR_WIKIPEDIA))
        ));
    })
};

const clearWikipediaEpic = (action$: ActionsObservable<any>): Observable<any> => {
  return action$.ofType(t.SEARCH_WIKIPEDIA)
    .filter((q: string): boolean => !q.length)
    .map(clearWikipedia)
}

export {
  searchWikipediaEpic,
  clearWikipediaEpic
};
