import * as t from '../actionTypes/wikipedia';

const wikipediaState: any[] = [];
const wikipediaReducer = (state = wikipediaState, action: any) => {
  switch(action.type) {
    case t.RECEIVE_WIKIPEDIA: 
      return action.payload.content;
    case t.CLEAR_WIKIPEDIA: 
      return wikipediaState;
    default:
      return state;
  }
}

export default wikipediaReducer;
