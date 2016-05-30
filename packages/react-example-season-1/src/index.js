import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import redux01Reducer from './reducer/redux01';

import routes from './routes';
import NoMatch from './pages/NoMatch.react';

let store = createStore(redux01Reducer);

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
