module.exports = {
    path: 'event-arguments',
    getComponents(nextState, cb) {
        require.ensure([], require => {
            cb(null, {content: require('./components')});
        });
    }
}
