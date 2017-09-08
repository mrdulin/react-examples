export default {
  path: 'getWrappedInstance',
  getComponents(nextState, cb) {
    require.ensure([], require => {
      const component = require('./main');
      cb(null, {content: component});
    }, 'getWrappedInstance')
  }
}
