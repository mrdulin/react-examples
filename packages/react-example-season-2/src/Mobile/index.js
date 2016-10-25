module.exports = {
    path: 'mobile',
    getComponents(nextState, cb) {
        require.ensure([
            '../api',
            '../util'
        ], require => {
            cb(null, {content: require('./components').default});
        })
    }
};