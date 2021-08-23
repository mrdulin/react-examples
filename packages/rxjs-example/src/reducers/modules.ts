import * as t from '../actionTypes/cascade';
import { IActionMeta } from '../interfaces';

interface IModule {
  id: number;
  name: string;
}

interface IModulesState<T> {
  [id: number]: T & IError;
}

interface IError {
  error: boolean;
  errMsg: string;
}

const modulesState: IModulesState<any> = {};
const modulesReducer = (state = modulesState, action: IActionMeta<any, number>): IModulesState<any> => {
  const id: number = action.meta;

  switch (action.type) {
    case t.REQUEST_MODULE_BY_ID:
      return state;
    case t.REQUEST_MODULE_BY_ID_SUCCESS:
      return Object.assign({}, state, {
        [id]: {
          error: false,
          errMsg: '',
          ...action.payload
        }
      });
    case t.REQUEST_MODULE_BY_ID_FAIL:
      return Object.assign({}, state, {
        [id]: {
          id,
          error: action.error,
          errMsg: action.payload
        }
      });
    case t.CLEAR_MODULE_BY_ID:
      const ids: string[] = Object.keys(state)
        .filter((id: string) => id !== action.payload.id);
      const nextState: IModulesState<any> = {};

      for (const id of ids) {
        (nextState as any)[id] = { ...(state as any)[id] };
      }

      // console.log(nextState === state);
      // console.log(nextState[1] === state[1]);

      return nextState;
    default:
      return state;
  }
}

export default modulesReducer;
