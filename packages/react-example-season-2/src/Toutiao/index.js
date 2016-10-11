module.exports = {
    path: 'toutiao',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, {content: require('./components').default})
        })
    }
}