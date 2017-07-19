import * as t from '../actionTypes/book';

interface IBookModule {
  Books?: any[];
  Total?: string;
  isLoading?: boolean;
}

interface IError {
  error: boolean;
  message: string;
}

interface IBookModules<T> {
  [name: string]: T | IError;
}

const bookModulesState: IBookModules<IBookModule> = {};
const bookModulesReducer = (state = bookModulesState, action: any): IBookModules<IBookModule> => {
  switch (action.type) {
    case t.REQUEST_BOOKS:
      const names: string[] = action.payload.names;
      names.forEach((name: string) => {
        state[name] = {};
        (state[name] as IBookModule).isLoading = true;
      });
      return Object.assign({}, state);
    case t.REQUEST_BOOKS_SUCCESS:
      const name: string = action.meta;
      state[name] = action.payload;
      return Object.assign({}, state);
    case t.REQUEST_BOOKS_FAIL:
      return Object.assign({}, state, {
        [action.meta]: {
          error: action.error,
          message: action.payload
        }
      });
    default:
      return state;
  }
}

export default bookModulesReducer;
