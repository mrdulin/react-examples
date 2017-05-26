import {combineReducers} from 'redux';
import {
  RS_ACTION_1,
  RS_ACTION_2
} from './actionTypes';

function booksReducer(state = ['angular', 'react', 'rxjs'], action) {
  switch(action.type) {
    case RS_ACTION_1: {
      return state.slice()
    }
    case RS_ACTION_2: {
      return state.concat();
    }
    default:
      return state;
  }
}

const moduleReducer = combineReducers({
  books: booksReducer
});

export default moduleReducer;
