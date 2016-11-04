import store, {injectAsyncReducer} from '../store';

export default {
    path: 'RouterHOC',
    getComponents(nextState, cb) {
        require.ensure([], require => {
             const component = require('./components').default;
             const reducer = require('./reducer').RouterHOC;
             injectAsyncReducer(store, 'RouterHOC', reducer)
             cb(null, {content: component});
        })
    }
}