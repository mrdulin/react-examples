module.exports = {
  path: 'react-pinch-zoom',
  getComponents(nextState, cb) {
    require.ensure([], require => {
      cb(null, {content: require('./components')})
    }, 'ReactPinchZoom');
  }
}
