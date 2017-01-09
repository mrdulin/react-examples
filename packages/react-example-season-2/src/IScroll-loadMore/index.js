module.exports = {
    path: 'iscroll-loadMore',
    getComponents(nextState, cb) {
        require.ensure([], require => {
            cb(null, {content: require('./components').default})
        }, 'iscrollLoadMore');
    }
}