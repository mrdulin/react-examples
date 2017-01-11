export default {
    path: 'getWrappedInstance',
    getComponents(nextState, cb) {
        require.ensure([], require => {
            const component = require('./components').default;
            cb(null, {content: component});
        })
    }
}