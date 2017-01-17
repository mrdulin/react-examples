module.exports = {
    path: 'core-js-or-babel-polyfill',
    getComponents(nextState, cb) {
        require.ensure([], require => {
            cb(null, {content: require('./components/')});
        })
    }
}
