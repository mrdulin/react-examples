module.exports = {
  path: 'test-scroller',
  getComponents(nextState, cb) {
    require.ensure([], require => {
      cb(null, {content: require('./components')});
    }, 'testScroller');
  }
}
