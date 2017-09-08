/**
 * Created by dulin on 2017/6/30.
 */
import {IkeyOfObject} from 'interfaces/common';
import isPromise from './isPromise';

function processArrayObjectPropName<T extends IkeyOfObject>(items: T[], methodName: (str: string) => string = toLowerCase): T[] {
  const newItems: T[] = [];
  for (const item of items) {
    newItems.push(processObjectPropName(item, methodName));
  }

  return newItems;
}

function processObjectPropName<T extends IkeyOfObject>(item: T, methodName: (str: string) => string = toLowerCase): T {
  const keys: string[] = Object.keys(item);
  const newItem: any = {};
  let keyCount: number = keys.length;
  while (keyCount--) {
    const key: string = keys[keyCount];
    newItem[methodName(key)] = item[key];
  }
  return newItem;
}

function toLowerCase(str: string) {
  return str.toLowerCase();
}

/**
 * let obj = {
 *   pet: {
 *     name: 'cat'
 *   }
 * };
 *
 * let s = 'obj.pet.name';
 * let s1 = 'pet.name';
 *
 * 通过s，获取到obj.pet.name的值'cat'
 *
 * @param obj
 * @param str
 * @returns {*}
 */
function getObjValueByStringProperty(obj: IkeyOfObject, str: string): any {

  if (!isObject(obj)) return obj;

  const strArr: string[] = str.split('.');
  const objKeys: string[] = Object.keys(obj);

  const rootKey: string | undefined = findFirstSameElement(objKeys, strArr);

  if (!rootKey) return;

  const idx: number = strArr.indexOf(rootKey);

  const rootValue: any = obj[rootKey];

  const subStr: string = strArr.slice(idx).join('.');

  return getObjValueByStringProperty(rootValue, subStr);

}


/**
 * 找到两个数组第一个相同的元素
 * @param a {Array}
 * @param b {Array}
 */
function findFirstSameElement<T>(a: T[], b: T[]): T | undefined {
  let el: T | undefined;
  if (!a.length || !b.length) return el;
  for (const aEl of a) {
    const idx: number = b.indexOf(aEl);
    if (idx !== -1) {
      el = aEl;
      break;
    }
  }
  return el;
}

function isObject(obj: IkeyOfObject): boolean {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

export {
  processArrayObjectPropName,
  processObjectPropName,
  toLowerCase,
  isPromise,
  getObjValueByStringProperty,
  findFirstSameElement
};


