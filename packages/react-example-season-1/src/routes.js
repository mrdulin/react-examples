import React from 'react';
import {Route, IndexRoute} from 'react-router';

//各个demo页面component
import App from './pages/App.react';
import Table from './pages/Table.react';

//定义路由规则
const routes = (
    //导航首页，导航到各个demo页面
    <Route path='/' component={App}>
        //各个demo页面路由
        <IndexRoute component={Table}></IndexRoute>
    </Route>

);

export default routes;
