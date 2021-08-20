module.exports = {
  path: 'immutability-helper',
  getComponents(nextState, cb) {
    require.ensure([], require => {
      cb(null, {content: require('./main')});
    }, 'ImmutabilityHelper');
  }
};
