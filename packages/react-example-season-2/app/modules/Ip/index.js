import store, {injectAsyncReducer} from 'app/store';

module.exports = {
  path: 'ip',
  getComponents(nextState, cb) {
    require.ensure([], (require) => {
      const IP = require('./components');
      const ipReducer = require('./reducer').juhe_ip;
      // const action = require('./action');

      injectAsyncReducer(store, 'juhe_ip', ipReducer);
      cb(null, {content: IP});
    })
  }
}
