module.exports = {
  path: 'ip',
  getComponents(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, {content: require('./components').default})
    })
  }
}