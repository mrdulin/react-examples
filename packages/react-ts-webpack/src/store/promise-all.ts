import store from './';
import * as actions from '../actions';

const actionDipatchs = [
  store.dispatch(actions.req1(true)),
  store.dispatch(actions.req2(false))
];

/**
 * 这里依赖了redux-promise-middleware, store.dispatch(...)将返回一个promise
 * 
 * req1成功
 * req2失败
 * 
 * 由于req2失败了，即store.dispatch(...)返回的promise被reject了, 对于promise.all来说，将会被reject，因此会进入catch.
 * 
 * 但是req1成功了，依旧会进入相对应的reducer的FULFILLED case
 * 
 * 因此，最后state为{req1: 'success', req2: ''};
 */
// Promise.all(actionDipatchs).then((result: any) => {
//   console.log('promise all: ', result);
// }).catch((err: any) => {
//   console.log('promise all err: ', err);
// });


/**
 * promise.all的使用场景：A和B两个请求
 */
Promise.all(
  actionDipatchs.map((ad: any) => 
    ad.catch((err: any) => {
      //当req1失败后，dispatch一个回退处理的action
      return store.dispatch(actions.req2Fallback('fallback value'));
    })
  )
)
  .then((result) => {
    console.log('promise all fallback', result);
  })
  .catch((err) => {
    console.log('promise all fallback err', err);
  });

