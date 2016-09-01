import './sass/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory, hashHistory, RouterContext} from 'react-router';
import {Provider} from 'react-redux';
import 'whatwg-fetch';

import routes from './routes';
import NoMatch from './pages/NoMatch.react';

import store from './store';

// console.log('init state is:', store.getState());

const createElement = (Component, props) => {
    // console.log(Component, props);
    return <Component {...props} />
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} createElement={createElement} render={props => {
            return <RouterContext {...props}/>
        }}>
            {/**或者将routes当作chilren插入也可以 */}
            {/*routes*/}
            {/*这里的注释只能这样写，//这种方式的注释会报错*/}
            <Route path='*' component={NoMatch}></Route>
        </Router>
    </Provider>,
    document.getElementById('container')
);

// console.log(process)
