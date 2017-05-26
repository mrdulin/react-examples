import {injectAsyncReducer} from 'app/store';

module.exports = {
  path: 'reselect-learning',
  getComponents(nextState, cb) {
    require.ensure([], require => {
      const component = require('./main');
      const reducer = require('./reducer');
      //注意顺序，先异步加载了reducer后，容器组件的mapStateToProps才能拿到该reducer
      injectAsyncReducer('ReselectLearning', reducer);
      cb(null, {content: component});
    }, 'reselect-learning');
  }
}
