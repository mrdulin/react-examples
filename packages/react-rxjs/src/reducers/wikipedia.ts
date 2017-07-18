import * as t from '../actionTypes/wikipedia';
import {combineReducers} from 'redux';

const wikipediaState: any[] = [];
const wikipediaReducer = (state = wikipediaState, action: any) => {
  switch(action.type) {
    case t.RECEIVE_WIKIPEDIA: 
      return action.payload.content;
    default:
      return state;
  }
}

export default wikipediaReducer;
