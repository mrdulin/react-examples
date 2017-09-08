export default {
  path: 'scu',
  getComponents(nextState, cb) {
    require.ensure([], require => {
      const component = require('./main');
      cb(null, {content: component});
    }, 'SCU')
  }
}
