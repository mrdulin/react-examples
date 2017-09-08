import * as Immutable from 'seamless-immutable';
import { combineReducers } from 'redux';
import * as Chance from 'chance';
import Contacts from 'models/Contacts';
import * as t from './actionTypes';
import { Action } from 'redux-actions';
import { IToggleIntroActionPayload } from './actions';
import { Reducer } from 'redux';

import update = require('react/lib/update');

const chance = new Chance();

export type ImmutableContacts = Immutable.ImmutableObject<Contacts>;
export type ImmutableContactsList = Immutable.ImmutableArray<ImmutableContacts>;
export type mutableContactsList = Contacts[];

interface IContactReducerState {
  contactsList: ImmutableContactsList | mutableContactsList;
}

export function genContactsState(count: number, immutable: boolean = false): ImmutableContactsList | mutableContactsList {
  const state: Contacts[] = [];

  for (let i = 0; i < count; i++) {
    const contacts: Contacts = new Contacts({
      id: chance.guid(),
      name: chance.name(),
      age: chance.age(),
      email: chance.email(),
      avatar: (chance as any).avatar(),
      intro: chance.paragraph({ sentences: 2 }),
      detail: chance.paragraph({ sentences: 5 })
    });

    state.push(contacts);
  }

  return immutable ? Immutable.from(state) : state;
}

const contactsState: Contacts[] = genContactsState(10);
const contactsListReducer = (state: Contacts[] = contactsState, action: Action<IToggleIntroActionPayload<Contacts>>): Contacts[] => {

  switch (action.type) {
    case t.TOGGLE_INTRO:
      const PROCESS_NUM = 1;
      console.time('process');
      const nextState: Contacts[] = mutableProcess(PROCESS_NUM, state, action);
      console.timeEnd('process');

      return nextState;
    default:
      return state;
  }

};

function mutableProcess(n: number, state: Contacts[], action: Action<IToggleIntroActionPayload<Contacts>>): Contacts[] {
  const processArr: any[] = [process1, process2, process3, process4];
  const fn = processArr[n - 1];

  return fn(state, action);
}

// 更新数组中某一个contacts的showIntro字段的值
// 基准测试 首次 点击第一条数据 耗时

// 方式一：
// 0.14599609375ms
function process1(state: Contacts[], action: Action<IToggleIntroActionPayload<Contacts>>): Contacts[] {
  if (action.payload) {
    const { id }: { id: string } = action.payload;
    const nextState: Contacts[] = state.slice();
    let contactsToBe: Contacts;
    let index: number = -1;

    const contactsFound: Contacts | undefined = nextState.find((element: Contacts, idx: number): boolean => {
      if (element.id === id) {
        index = idx;
        return true;
      } else {
        return false;
      }
    });

    contactsToBe = new Contacts(contactsFound);

    if (contactsToBe) {
      contactsToBe.toggleIntro(!contactsToBe.showIntro);
      nextState[index] = contactsToBe;
    }

    // console.log(nextState);
    // console.log(nextState[0] === state[0]); // true
    // console.log(contactsToBe === state[0]); // true
    return nextState;
  } else {
    return state;
  }
}

// 方式二：
// 0.158935546875ms
function process2(state: Contacts[], action: Action<IToggleIntroActionPayload<Contacts>>): Contacts[] {
  if (action.payload) {
    const { id }: { id: string } = action.payload;
    const nextState: Contacts[] = state.map((contacts: Contacts): Contacts => {
      if (contacts.id === id) {
        const newContacts = new Contacts(contacts);
        newContacts.toggleIntro(!newContacts.showIntro);
        return newContacts;
      } else {
        return contacts;
      }
    });

    return nextState;
  } else {
    return state;
  }
}

// 方式三: 
// 1.116943359375ms
function process3(state: Contacts[], action: Action<IToggleIntroActionPayload<Contacts>>): Contacts[] {
  if (action.payload) {
    const { id }: { id: string } = action.payload;
    return update(state, {
      $apply: (contactsList: Contacts[]) => {
        console.log(contactsList === state);
        return contactsList.map((contacts: Contacts) => {
          if (contacts.id === id) {
            const newContacts = new Contacts(contacts);
            newContacts.toggleIntro(!newContacts.showIntro);
            return newContacts;
          } else {
            return contacts;
          }
        });
      }
    });
  } else {
    return state;
  }
}

// 方式四:
// 0.340087890625ms
function process4(state: Contacts[], action: Action<IToggleIntroActionPayload<Contacts>>): Contacts[] {
  if (action.payload) {
    const { index, contacts }: { index: number, contacts: Contacts } = action.payload;

    return update(state, {
      [index]: {
        $set: new Contacts(contacts).toggleIntro(!contacts.showIntro)
      }
    });

  } else {
    return state;
  }
}

const moduleReducer: Reducer<IContactReducerState> = combineReducers<IContactReducerState>({
  contactsList: contactsListReducer
});

export {
  IContactReducerState
};
export default moduleReducer;
