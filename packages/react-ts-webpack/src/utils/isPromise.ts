/**
 * Created by dulin on 2017/7/3.
 */
export default function isPromise(value: any): boolean {
  if (value !== null && typeof value === 'object') {
    return value && typeof value.then === 'function';
  }

  return false;
}
