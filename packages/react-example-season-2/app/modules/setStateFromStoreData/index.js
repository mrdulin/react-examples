import {injectAsyncReducer} from 'app/store';

module.exports = {
  path: 'setState-from-store-data',
  getComponents(nextState, cb) {
    require.ensure([], require => {
      const component = require('./main');
      const reducer = require('./reducer');

      cb(null, {content: component});
      injectAsyncReducer('setStateFromStoreData', reducer);
    }, 'setStateFromStoreData');
  }
};
