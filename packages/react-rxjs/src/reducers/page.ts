import * as t from '../actionTypes/cascade';
import { IActionMeta } from '../interfaces';

const pageState = {
  content: {},
  modules: {},
  error: false,
  errMsg: ''
};
const pageReducer = (state = pageState, action: IActionMeta<any, any>) => {

  switch (action.type) {
    case t.REQUEST_PAGE:
      return state;
    case t.REQUEST_PAGE_SUCCESS:
      return Object.assign({}, state, action.payload);
    case t.REQUEST_PAGE_FAIL:
      const errMsg: string = action.payload;
      return Object.assign({}, state, { errMsg, error: action.error });
    default:
      return state;
  }
};

export default pageReducer;
