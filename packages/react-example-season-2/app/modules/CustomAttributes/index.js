module.exports = {
    path: 'custom-attribute',
    getComponents(nextState, cb) {
        require.ensure([], require => {
            cb(null, {content: require('./components')})
        }, 'CustomAttributes')
    }
}
