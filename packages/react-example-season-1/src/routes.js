import React from 'react';
import {Route, IndexRoute} from 'react-router';

//各个demo页面component
import App from './pages/App.react';
import Table from './pages/Table.react';
import Form from './pages/Form.react';

//定义路由规则
const routes = (
    //导航首页，导航到各个demo页面
    <Route path='/' component={App}>
        //各个demo页面路由
        <Route path='table' component={Table}></Route>
        <Route path='form' component={Form}></Route>
    </Route>
);

export default routes;
