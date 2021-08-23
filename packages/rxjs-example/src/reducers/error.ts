import * as t from '../actionTypes/error';

interface IError {
  error: boolean;
  message: string;
}

interface IErrorMap<T> {
  [actionName: string]: T;
}

const errorMapState: IErrorMap<IError> = {};

const errorMapReducer = (state = errorMapState, action: any) => {
  switch (action.type) {
    case t.ADD_ERROR:
      const actionType: string = action.meta;
      const msg: string = action.payload;
      return Object.assign({}, state, { [actionType]: msg });
    case t.REMOVE_ERROR:
      
      return state;
    default:
      return state;
  }
}

export default errorMapReducer;
