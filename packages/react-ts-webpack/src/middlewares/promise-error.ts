// /**
//  * Created by dulin on 2017/7/3.
//  */
// import {isPromise} from 'utils';
// import {Dispatch} from 'redux';
// import {ActionMeta} from 'redux-actions';
//
// export default function globalErrorMiddleware() {
//   return (next: Dispatch<any>) => (action: ActionMeta<any | any, any>) => {
//
//     // If not a promise, continue on
//     if (!isPromise(action.payload)) {
//       return next(action);
//     }
//
//     /**
//      * Because it iterates on an array for every async action, this
//      * oneOfType function could be expensive to call in production.
//      * Another solution would would be to include a property in `meta`
//      * and evaulate that property.
//      *
//      * The error middleware serves to dispatch the initial pending promise to
//      * the promise middleware, but adds a `catch`.
//      */
//
//     if (action.meta.globalError === true) {
//       // handle error
//       // Dispatch initial pending promise, but catch any errors
//       return next(action).catch((error: Error) => {
//         if (process.env.NODE_ENV === 'development') {
//           console.warn(`${action.type} caught at middleware with reason: ${JSON.stringify(error.message)}.`);
//         }
//
//         return error;
//       });
//
//     }
//
//     return next(action);
//   };
// }
