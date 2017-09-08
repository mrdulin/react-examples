import * as t from './actionTypes';
import Contacts from 'models/Contacts';
import { Action } from 'redux-actions';

interface IToggleIntroActionPayload<T> {
  id: string;
  index: number;
  contacts: T;
}

const toggleIntro = (id: string, index: number, contacts: Contacts): Action<IToggleIntroActionPayload<Contacts>> => ({
  type: t.TOGGLE_INTRO,
  payload: {
    id,
    index,
    contacts
  }
});

export {
  toggleIntro,
  IToggleIntroActionPayload
};
