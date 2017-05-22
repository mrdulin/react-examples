module.exports = {
  path: 'setState-in-componentWillMount',
  getComponents(nextState, cb) {
    require.ensure([], require => {
      const component = require('./main');
      cb(null, {content: component});
    }, 'setStateInComponentWillMount')
  }
}
