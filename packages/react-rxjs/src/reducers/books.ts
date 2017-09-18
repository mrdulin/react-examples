import * as t from '../actionTypes/book';
import { IActionMeta } from '../interfaces';

interface IBookModule {
  Books?: any[];
  Total?: string;
  isLoading: boolean;
}

interface IError {
  error?: boolean;
  message?: string;
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
      let nextState: BookModulesState = {};
      names.forEach((name: string) => {
        nextState[name] = {
          error: false,
          message: '',
          isLoading: true
        };
      });
      return nextState;
    case t.REQUEST_BOOKS_SUCCESS:
      const name: string = action.meta;
      return Object.assign({}, state, {
        [name]: {
          error: false,
          message: '',
          isLoading: false,
          ...action.payload
        }
      })
    case t.REQUEST_BOOKS_FAIL:
      return Object.assign({}, state, {
        [action.meta]: {
          error: action.error,
          message: action.payload,
          isLoading: false
        }
      });
    case t.CLEAR_BOOKS:
      return bookModulesState;
    default:
      return state;
  }
}

export {
  BookModule
};
export default bookModulesReducer;
