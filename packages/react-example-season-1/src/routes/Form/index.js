export default {
    path: 'form',
    getComponent: (nextState, cb) => {
        require.ensure([], (require) => {
            cb(null, require('./components/Form.react'))
        })
    }
}