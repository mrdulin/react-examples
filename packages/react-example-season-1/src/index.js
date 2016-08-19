import './sass/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import 'whatwg-fetch';

import routes from './routes';
import NoMatch from './pages/NoMatch.react';

import store from './store';

// console.log('init state is:', store.getState());

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

// console.log(process)
