import {injectAsyncReducer} from 'app/store';

module.exports = {
  path: 'component-property-key',
  getComponents(nextState, cb) {
    require.ensure([], require => {
      const main = require('./main');
      const reducer = require('./reducers');
      injectAsyncReducer('page_componentKeyProperty', reducer)
      cb(null, {content: main});
    }, 'component-key-property')
  }
}
