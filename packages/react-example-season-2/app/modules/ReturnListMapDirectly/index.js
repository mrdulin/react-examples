module.exports = {
    path: 'return-list-map-directly',
    getComponents(nextState, cb) {
        require.ensure([], require => {
            const component = require('./main');
            cb(null, {content: component});
        }, 'return-list-map-directly');
    }
}
