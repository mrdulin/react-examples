module.exports = {
  path: 'animation',
  getComponents(nextState, cb) {
    require.ensure([], require => {
      const animation = require('./components');
      cb(null, { content: animation });
    }, 'animation')
  }
}
