import * as t from '../actionTypes/book';
import { IActionMeta } from '../interfaces';

interface IBookModule {
  Books?: any[];
  Total?: string;
  isLoading: boolean;
}

interface IError {
  error: boolean;
  message: string;
}

interface IBookModules<T> {
  [name: string]: T;
}


type BookModule = IBookModule & IError;
type BookModulesState = IBookModules<BookModule>;

const bookModulesState: BookModulesState = {};
const bookModulesReducer = (state = bookModulesState, action: IActionMeta<any, string>): BookModulesState => {
  switch (action.type) {
    case t.REQUEST_BOOKS:
      const names: string[] = action.payload.names;
      names.forEach((name: string) => {
        state[name] = { error: false, message: '', isLoading: false };
        (state[name] as IBookModule).isLoading = true;
      });
      return Object.assign({}, state);
    case t.REQUEST_BOOKS_SUCCESS:
      const name: string = action.meta;
      state[name] = {
        error: false,
        message: '',
        isLoading: false,
        ...action.payload
      };
      return Object.assign({}, state);
    case t.REQUEST_BOOKS_FAIL:
      return Object.assign({}, state, {
        [action.meta]: {
          error: action.error,
          message: action.payload,
          isLoading: false
        }
      });
    default:
      return state;
  }
}

export {
  BookModule
};
export default bookModulesReducer;
