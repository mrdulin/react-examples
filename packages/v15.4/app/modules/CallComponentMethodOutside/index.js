export default {
  path: 'call-component-method-outside',
  getComponents(nextState, cb) {
    require.ensure([], require => {
      const component = require('./components');
      cb(null, {content: component});
    }, 'CallComponentMethodOutside')
  }
}
