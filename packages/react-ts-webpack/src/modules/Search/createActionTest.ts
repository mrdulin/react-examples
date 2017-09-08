/**
 * Created by dulin on 2017/6/28.
 */
import {createAction} from 'redux-actions';

// -- for testing --

const action1 = createAction('SEARCH/ACTION_1');
const action2 = createAction<void>('SEARCH/ACTION_2');

interface Iaction3Payload {
  name: string;
}

const action3 = createAction<Iaction3Payload, string>('SEARCH/ACTION_3', (name: string): Iaction3Payload => ({name}));

interface Iaction4Payload {
  total: number;
  page: number;
}

const action4 = createAction<Iaction4Payload, number, number>(
  'SEARCH/ACTION_4',
  (total: number, page: number): Iaction4Payload => {
    return {
      total,
      page
    };
  }
);

interface Iaction5Payload {
  name: string;
  age: number;
  bookCount: number;
}

const action5 = createAction<Iaction5Payload, string, number, string[]>(
  'SEARCH/ACTION_5',
  (name: string, age: number, books: string[]): Iaction5Payload => {
    const bookCount: number = books.length;
    return {
      name,
      age,
      bookCount
    };
  }
);

interface Iaction6Payload {
  isValid: boolean;
}

interface Iarg1 {
  isValid: boolean;
}

const action6 = createAction<Iaction6Payload, Iarg1, number, string, any>(
  'SEARCH/ACTION_6',
  (arg1: Iarg1, num: number, str: string, extra?: any): Iaction6Payload => {
    const isValid: boolean = arg1.isValid && num === 1 && str === '1' && typeof extra === 'undefined';
    return {
      isValid
    };
  }
);

export {
  // for testing
  action1,
  action2,
  action3,
  action4,
  action5,
  action6
};
