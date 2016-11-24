module.exports = {
    path: 'react-pinch-zoom-test',
    getComponents(nextState, cb) {
        require.ensure([], require => {
            cb(null, {content: require('./components').default})
        });
    }
}