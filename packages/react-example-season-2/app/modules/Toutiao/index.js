module.exports = {
  path: 'toutiao',
  getComponents(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, { content: require('./components') })
    }, 'toutiao')
  }
}
