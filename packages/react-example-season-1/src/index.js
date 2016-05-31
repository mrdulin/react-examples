import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import redux01Reducer from './reducer/redux01';
import createLogger from 'redux-logger';

import routes from './routes';
import NoMatch from './pages/NoMatch.react';

let logger = createLogger();

//logger中间件必须放在所有中间件的最后，否则它会打印出thunk和promise中间件的一些操作，而不是action
let store = createStore(redux01Reducer, applyMiddleware(logger));

console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            {routes}
            {/*这里的注释只能这样写，//这种方式的注释会报错*/}
            <Route path='*' component={NoMatch}></Route>
        </Router>
    </Provider>,
    document.getElementById('container')
);
