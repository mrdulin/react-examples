module.exports = {
    path: 'react-event-argument',
    getComponents(nextState, cb) {
        require.ensure([], require => {
            cb(null, {content: require('./components/index.react').default});
        });
    }
}