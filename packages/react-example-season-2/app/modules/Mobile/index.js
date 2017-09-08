module.exports = {
  path: 'mobile',
  getComponents(nextState, cb) {
    require.ensure([], require => {
      cb(null, {content: require('./components')});
    }, 'mobile')
  }
};
