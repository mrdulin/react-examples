import {injectAsyncReducer} from 'app/store';

module.exports = {
  path: 'redux-actions-flow(/:query)',
  getComponents(nextState, cb) {
    require.ensure([], require => {
      const component = require('./main');
      const moduleReducer = require('./reducer');
      injectAsyncReducer('reduxActionsFlowReducers', moduleReducer);
      cb(null, {content: component});
    }, 'redux-actions-flow');
  }
};
