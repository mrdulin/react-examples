module.exports = {
    path: 'react-custom-attribute',
    getComponents(nextState, cb) {
        require.ensure([], require => {
            cb(null, {content: require('./components/index.react').default})
        })
    }
}