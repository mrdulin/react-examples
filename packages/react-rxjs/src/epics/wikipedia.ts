import * as t from '../actionTypes/wikipedia';
import { Observable } from 'rxjs/Observable';
import { ajax } from 'rxjs/observable/dom/ajax';
import { ActionsObservable } from 'redux-observable';
import { receiveWikipedia } from '../actions/wikipedia';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/distinctUntilChanged';

const searchWikipedia = (action$: ActionsObservable<any>) => {
  return action$.ofType(t.SEARCH_WIKIPEDIA)
    .map((action: any) => action.payload.query)
    .filter((q: string) => q.length > 0)
    .debounceTime(1000)
    .distinctUntilChanged()
    .switchMap((q: string) => {
      const url = `http://it-ebooks-api.info/v1/search/${q}`;
      const wikipedia = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${q}`;
      return ajax.getJSON(url)
        .map(receiveWikipedia)
    })
};

export default searchWikipedia;
