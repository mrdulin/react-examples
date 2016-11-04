export default {
    path: 'call-component-method-outside',
    getComponents(nextState, cb) {
        require.ensure([], require => {
            const component = require('./components').default;
            cb(null, {content: component});
        })
    }
}