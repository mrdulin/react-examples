import store, {injectAsyncReducer} from '../store';

module.exports = {
  path: 'ip',
  getComponents(nextState, cb) {
    require.ensure([
      './components',
      './reducer'
    ], (require) => {
      const IP = require('./components').default;
      const ipReducer = require('./reducer').juhe_ip;
      
      injectAsyncReducer(store, 'juhe_ip', ipReducer);
      cb(null, {content: IP});
    })
  }
}