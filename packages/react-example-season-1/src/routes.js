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
import IOSScrollEvent from './pages/IOSScrollEvent.react';
import LoopScroll from './pages/LoopScroll.react';
import ModalInput from './pages/ModalInput.react';
import Filter from './pages/Filter.react';
import DynamicInlineStyle from './pages/DynamicInlineStyle.react';
import PassAsyncDataToChildComponent from './pages/PassAsyncDataToChildComponent.react';
import Redux03Middleware from './pages/Redux03-middleware.react';
import ArrayDom from './pages/ArrayDom.react';
import ChangeStateTreeRefData from './pages/ChangeStateTreeRefData';
import InitStateTreeData from './pages/initStateTreeData.react';
import Download from './pages/Download.react';
import MobileInputFocusAndKeyboard from './pages/MobileInputFocusAndKeyboard.react';
import AudioPages from './pages/Audio.react';
import IframePage from './pages/iframe.react';
import GrabChildComponentState from './pages/GrabChildComponentState.react';
import AjaxInConstructor from './pages/AjaxInConstructor.react';
import TestHocComponent from './pages/TestHocComponent.react';
import InheritComponent from './pages/InheritComponent.react';
import ComposableComponent from './pages/ComposableComponent.react';
import FunctionBind from './pages/FunctionBind.react';
import ReactChildren from './pages/ReactChildren.react';
import IOSInputFocus from './pages/IOSInputFocus.react';
import AsyncActionInComponentWillReceiveProps from './pages/AsyncActionInComponentWillReceiveProps.react';

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
        <Route path='ios-scroll-event' component={IOSScrollEvent}></Route>
        <Route path='loop-scroll' component={LoopScroll}></Route>
        <Route path='modal-input' component={ModalInput}></Route>
        <Route path='filter' component={Filter}></Route>
        <Route path='dynamic-inline-style' component={DynamicInlineStyle}></Route>
        <Route path='PassAsyncDataToChildComponent' component={PassAsyncDataToChildComponent}></Route>
        <Route path='redux03-middleware' component={Redux03Middleware}></Route>
        <Route path='array-dom' component={ArrayDom}></Route>
        <Route path='changeStateTreeRefData' component={ChangeStateTreeRefData}></Route>
        <Route path="initStateTreeData" component={InitStateTreeData}></Route>
        <Route path='downloadAll' component={Download}></Route>
        <Route path='MobileInputFocusAndKeyboard' component={MobileInputFocusAndKeyboard}></Route>
        <Route path='audio' component={AudioPages}></Route>
        <Route path='iframe' component={IframePage}></Route>
        <Route path='GrabChildComponentState' component={GrabChildComponentState}></Route>
        <Route path='AjaxInConstructor' component={AjaxInConstructor}></Route>
        <Route path='HOC' component={TestHocComponent}></Route>
        <Route path='InheritComponent' component={InheritComponent}></Route>
        <Route path='composableComponent' component={ComposableComponent}></Route>
        <Route path='function-bind' component={FunctionBind}></Route>
        <Route path='ReactChildren' component={ReactChildren}></Route>
        <Route path='ios-input-focus' component={IOSInputFocus}></Route>
        <Route path='async-action-in-componentWillReceiveProps' component={AsyncActionInComponentWillReceiveProps}></Route>
    </Route>
);

export default routes;
