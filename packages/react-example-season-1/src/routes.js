import React from 'react';
import {Route, IndexRoute} from 'react-router';

//各个demo页面component
import App from './pages/App.react';
import Table from './pages/Table.react';
import Form from './pages/Form.react';
import Redux01 from './pages/Redux01.react';
import TodoList from './pages/TodoList.react';
import Redux02 from './pages/Redux02.react';
import ReactRedux01 from './pages/ReactRedux01.react';
import ReduxAPIMiddleware from './pages/ReduxAPIMiddleware.react';
import Ref from './pages/Ref.react';

//定义路由规则
const routes = (
    //导航首页，导航到各个demo页面
    <Route path='/' component={App}>
        //各个demo页面路由
        <Route path='table' component={Table}></Route>
        <Route path='form' component={Form}></Route>
        <Route path='redux01' component={Redux01}></Route>
        <Route path='todoList' component={TodoList}></Route>
        <Route path='redux02' component={Redux02}></Route>
        <Route path='react-redux01' component={ReactRedux01}></Route>
        <Route path='redux-api-middware' component={ReduxAPIMiddleware}></Route>
        <Route path='ref_callback_attribute' component={Ref}></Route>
    </Route>
);

export default routes;
