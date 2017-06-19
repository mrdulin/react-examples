module.exports = {
  path: '/route-to-self/:id',
  getComponents(nextState, cb) {
    require.ensure([], (require) => {
      const component = require('./main');
      cb(null, { content: component })
    }, 'route-to-self')
  }
}
