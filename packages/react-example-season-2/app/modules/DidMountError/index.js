module.exports = {
    path: 'did-mount-error',
    getComponents(nextState, cb) {
        require.ensure([], require => {
            cb(null, {content: require('./components')});
        })
    }
}
