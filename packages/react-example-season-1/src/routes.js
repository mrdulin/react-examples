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
import ReactRedux02 from './pages/ReactRedux02.react';
import ReactRedux03 from './pages/ReactRedux03.react';
import ReduxAPIMiddleware from './pages/ReduxAPIMiddleware.react';
import Ref from './pages/Ref.react';
import StateLessFunctionalComponent from './pages/StateLessFunctionalComponent.react';
import CountDownPage from './pages/CountDownPage.react';
import xScroll from './pages/xScroll.react';
import ReactChinaQuestions from './pages/ReactChinaQuestions.react';
import ReactRouter01 from './pages/ReactRouter01.react';
import ReactRouter02 from './pages/ReactRouter02.react';
import ReactRouter03 from './pages/ReactRouter03.react';
import OnMouseOverComponent from './components/ReactChinaQuestions/onMouseOver.react';
import DomRerenderOrAppendNew from './components/ReactChinaQuestions/domRerenderOrAppendNew.react';
import ScrollTop from './pages/ScrollTop.react';

//定义路由规则
const routes = (
    //导航首页，导航到各个demo页面
    <Route path='/' component={App}>
        //各个demo页面路由
        <Route path='table' component={Table}></Route>
        <Route path='form' component={Form}></Route>
        <Route path='redux01' component={Redux01}></Route>
        <Route path='redux02' component={Redux02}></Route>
        <Route path='todoList' component={TodoList}></Route>
        <Route path='react-redux01' component={ReactRedux01}></Route>
        <Route path='react-redux02' component={ReactRedux02}></Route>
        <Route path='react-redux03' component={ReactRedux03}></Route>
        <Route path='redux-api-middware' component={ReduxAPIMiddleware}></Route>
        <Route path='ref_callback_attribute' component={Ref}></Route>
        <Route path='stateless-functional-component' component={StateLessFunctionalComponent}></Route>
        <Route path='countDown' component={CountDownPage}></Route>
        <Route path='xScroll' component={xScroll}></Route>
        <Route path='react-router01(/:page)' component={ReactRouter01}></Route>
        <Route path='react-router02' component={ReactRouter02}></Route>
        <Route path='react-router03' component={ReactRouter03}></Route>
        <Route path='react-china-questions' component={ReactChinaQuestions}></Route>
        <Route path='onMouseOver' component={OnMouseOverComponent}></Route>
        <Route path='domRerenderOrAppendNew' component={DomRerenderOrAppendNew}></Route>
        <Route path='ScrollTop' component={ScrollTop}></Route>
    </Route>
);

export default routes;
