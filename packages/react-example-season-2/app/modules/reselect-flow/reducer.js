import {combineReducers} from 'redux';
import {
  CHANGE_FILTER,
  ADD_PERSON_INFO
} from './actionTypes';

function booksReducer(state = [
  {name: 'angular', sellout: false},
  {name: 'rxjs', sellout: true},
  {name: 'jquery', sellout: false},
  {name: 'react', sellout: true}
], action) {
  switch(action.type) {
    default:
      return state;
  }
}

function personReducer(state = {
  name: '',
  age: 0
}, action) {
  switch(action.type) {
    case ADD_PERSON_INFO: {
      const person = {name: 'emilie', age: 26};
      return Object.assign({}, state, {person});
    }
    default:
      return state;
  }
}

function bookVisibleFilterReducer(state = 'SHOW_ALL', action) {
  switch(action.type) {
    case CHANGE_FILTER: {
      return action.payload;
    }
    default:
      return state;
  }
}

const moduleReducer = combineReducers({
  books: booksReducer,
  person: personReducer,
  bookVisibleFilter: bookVisibleFilterReducer
});

export default moduleReducer;
