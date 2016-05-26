import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';

import routes from './routes';
import NoMatch from './pages/NoMatch.react';

ReactDOM.render(
    <Router history={browserHistory}>
        {routes}
        {/*这里的注释只能这样写，//这种方式的注释会报错*/}
        <Route path='*' component={NoMatch}></Route>
    </Router>,
    document.getElementById('container')
);
