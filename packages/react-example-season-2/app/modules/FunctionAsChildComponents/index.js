module.exports = {
    path: 'function-as-child-components',
    getComponents(nextState, cb) {
        require.ensure([], require => {
            const component = require('./main');
            cb(null, {content: component});
        }, 'function-as-child-components');
    }
}
