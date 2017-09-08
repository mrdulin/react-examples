/**
 * Created by dulin on 2017/6/29.
 */
import { Middleware } from 'redux';

declare module 'redux-promise-middleware' {
  export const PENDING: string;
  export const FULFILLED: string;
  export const REJECTED: string;

  export default function promiseMiddleware(config?: { promiseTypeSuffixes: string[] }): Middleware;
}
