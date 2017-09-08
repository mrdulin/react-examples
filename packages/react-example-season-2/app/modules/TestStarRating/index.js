/**
 * Created by dulin on 17/1/18.
 */
module.exports = {
  path: 'test-star-rating',
  getComponents(nextState, cb) {
    require.ensure([], require => {
      cb(null, {content: require('./components')});
    }, 'TestStarRating');
  }
}
