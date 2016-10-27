export default {
    path: 'shouldComponentUpdate-1',
    getComponents(nextState, cb) {
        require.ensure([
            './components'
        ], require => {
            const component = require('./components').default;
            cb(null, {content: component});
        })
    }
}