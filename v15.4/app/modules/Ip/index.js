import {injectAsyncReducer} from 'app/store';

module.exports = {
  path: 'ip',
  getComponents(nextState, cb) {
    require.ensure([], (require) => {
      const IP = require('./components');
      const {ip} = require('./reducer');

      injectAsyncReducer('ip', ip);
      cb(null, {content: IP});
    }, 'ip')
  }
};
