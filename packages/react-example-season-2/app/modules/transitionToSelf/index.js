module.exports = {
  path: 'transitionToSelf/:id',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, { content: require('./components').default })
    }, 'transitionToSelf')
  }
}
