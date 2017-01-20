/**
 * Created by dulin on 17/1/20.
 */
import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Root from './containers/Root';
import Home from './containers/Home';
import About from './containers/About';
import Contact from './containers/Contact';

const routes = (
    <Route path="/" component={Root}>
        <IndexRoute component={Home}/>
        <Route path="about" component={About} />
        <Route path="contact" component={Contact}/>
    </Route>
);

module.exports = routes;