module.exports = {
  path: 'default-props',
  getComponents(nextState, cb) {
    require.ensure([], require => {
      const component = require('./main');
      cb(null, {content: component});
    }, 'defaultProps');
  }
};
