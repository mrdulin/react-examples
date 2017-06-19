export default {
  path: 'scu',
  getComponents(nextState, cb) {
    require.ensure([], require => {
      const component = require('./components');
      cb(null, { content: component });
    }, 'SCU')
  }
}
