import {
  CHANGE_FILTER,
  ADD_PERSON_INFO
} from './actionTypes';

export const changeFilter = (filter) => ({type: CHANGE_FILTER, payload: filter});
export const addPersonInfo = () => ({type: ADD_PERSON_INFO});
