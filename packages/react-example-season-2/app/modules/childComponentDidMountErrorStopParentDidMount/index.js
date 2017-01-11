module.exports = {
    path: 'child-component-did-mount-error-stop-parent-component-did-mount',
    getComponents(nextState, cb) {
        require.ensure([], require => {
            cb(null, {content: require('./components/index.react').default});
        })
    }
}