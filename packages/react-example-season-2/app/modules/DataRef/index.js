import {injectAsyncReducer} from 'app/store';

module.exports = {
    path: 'data-ref',
    getComponents(nextState, cb) {
        require.ensure([], require => {
            const main = require('./main');
            const {DataRef} = require('./reducer');
            injectAsyncReducer('DataRef', DataRef);
            cb(null, {content: main});
        }, 'DataRef')
    }
}