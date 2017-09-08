module.exports = {
  path: 'book-search',
  getComponents(nextState, cb) {
    require.ensure([], require => {
      cb(null, {content: require('./components')})
    }, 'SearchBook');
  }
}
