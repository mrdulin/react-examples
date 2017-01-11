module.exports = {
    path: 'image-zoom',
    getComponents(nextState, cb) {
        require.ensure([], require => {
            cb(null, {content: require('./components')});
        })
    }
}
