import store, {injectAsyncReducer} from 'app/store';

export default {
  path: 'router-hoc',
  getComponents(nextState, cb) {
    require.ensure([], require => {
      const component = require('./components');
      const reducer = require('./reducer').RouterHOC;
      injectAsyncReducer('RouterHOC', reducer)
      cb(null, {content: component});
    }, 'RouterHOC')
  }
}
