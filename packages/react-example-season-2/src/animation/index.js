module.exports = {
    path: 'animation',
    getComponents(nextState, cb) {
        require.ensure([
            './components/index.react',
        ], require => {
            const animation = require('./components/index.react').default;

            cb(null, {content: animation});
        })
    }
}