import { genContactsState, ImmutableContactsList, ImmutableContacts } from '../reducers';
import Contacts from 'models/Contacts';
import * as Immutable from 'seamless-immutable';

const ImmutableStatic = (Immutable as any).static;

describe('contact - reducers test suites', () => {

  describe('genContactsState - test suites', () => {

    it('should be return an mutable array with correct length', () => {

      const actualValue: Contacts[] = genContactsState(10);
      expect(actualValue).toHaveLength(10);
      expect(actualValue[0]).toBeInstanceOf(Contacts);

      expect(Immutable.isImmutable(actualValue)).toBeFalsy();

      const doubleActualValue: Contacts[] = actualValue.concat(genContactsState(10));
      expect(doubleActualValue).toHaveLength(20);


    });

    it('shoule be return an immutable array with correct length', () => {

      const IMMUTABLE: boolean = true;
      const DATA_COUNT = 5;
      const actualValue: Contacts[] = genContactsState(DATA_COUNT, IMMUTABLE);

      expect(Immutable.isImmutable(actualValue)).toBeTruthy();

      function sortImmutableData() {
        try {
          actualValue.sort();
        } catch (e) {
          throw e;
        }
      }

      expect(sortImmutableData).toThrow();
      expect(sortImmutableData).toThrowError('The sort method cannot be invoked on an Immutable data structure.');

    });

    it('should be immutable object within the array', () => {

      const actualValue: ImmutableContactsList | Contacts[] = genContactsState(5, true);
      (actualValue as any).forEach((value: Immutable.ImmutableObject<Contacts>) => {
        expect(Immutable.isImmutable(value)).toBeTruthy();
      });
    });

    it('should not change the object of array', () => {

      const arrayObj: Immutable.ImmutableArray<any> = Immutable.from([{ name: 'react' }, { name: 'angular' }]);

      function setFirstObjName(name: string) {
        try {
          arrayObj[0].name = 'ionic';
        } catch (e) {
          throw e;
        }
      }

      arrayObj.forEach((obj: any) => {
        expect(Immutable.isImmutable(obj)).toBeTruthy();
      });
      expect(setFirstObjName).toThrow();

      const firstObj = arrayObj[0].set('name', 'ionic');
      expect(firstObj).toEqual({ name: 'ionic' });

    });

    it('should be return a immutable objec with literal object', () => {

      const obj: Immutable.ImmutableObject<any> = Immutable({ name: '', age: -1 });
      expect(Immutable.isImmutable(obj)).toBeTruthy();

      const newObj: Immutable.ImmutableObject<any> = ImmutableStatic.set(obj, 'name', 'novaline');
      expect(newObj).toEqual({ name: 'novaline', age: -1 });
      expect(obj).toEqual({ name: '', age: -1 });

    });

    it('shoule be return a immutable object', () => {

      const contacts: Immutable.ImmutableObject<Contacts> = Immutable.from(new Contacts());

      expect(Immutable.isImmutable(contacts)).toBeTruthy();
      const newContacts: Immutable.ImmutableObject<Contacts> = contacts.set('name', 'novaline');
      expect(contacts.name).toBeUndefined();
      expect(newContacts.name).toBe('novaline');
    });

    it('should update the object field success by using immutable data', () => {

      const state: ImmutableContactsList | Contacts[] = genContactsState(5, true);
      const updateIndex: number = 0;

      const nextState: ImmutableContactsList = (state as any).map((contacts: ImmutableContacts, idx: number): ImmutableContacts => {
        if (idx === updateIndex) {
          return contacts.set('showIntro', !contacts.showIntro);
        } else {
          return contacts;
        }
      });

      // 断言引用是否相等
      expect(nextState === state).toBeFalsy();
      expect(nextState[0] === state[0]).toBeFalsy();

      expect(nextState[0].showIntro).toBeTruthy();

    });

    it('should be return an immutable array when immutable array concat a vanilla array', () => {

      const state: Immutable.ImmutableArray<number> = Immutable.from([1, 2, 3]);
      const actualValue = state.concat([4, 5, 6]);
      const expectValue = [1, 2, 3, 4, 5, 6];

      expect(Immutable.isImmutable(actualValue)).toBeTruthy();
      expect(actualValue).toEqual(expectValue);

      function sort<T>(arr: T[]): any {
        return (): T[] => {
          try {
            return arr.sort();
          } catch (e) {
            throw e;
          }
        };
      }

      expect(sort(actualValue)).toThrow();
      expect(sort(actualValue)).toThrowError('The sort method cannot be invoked on an Immutable data structure.');

    });

    it('shoule be return an mutable array when a vanilla array concat an immutable array', () => {

      const state: number[] = [4, 5, 6];
      const actualValue = state.concat(Immutable.from([1, 2, 3]));
      const expectValue = [4, 5, 6, 1, 2, 3];

      expect(Immutable.isImmutable(expectValue)).toBeFalsy();
      expect(actualValue).toEqual(expectValue);

      expect(actualValue.sort()).toEqual([1, 2, 3, 4, 5, 6]);

    });

  });

});
