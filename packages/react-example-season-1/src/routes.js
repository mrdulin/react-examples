import React from 'react';
import {Route, IndexRoute, IndexRedirect} from 'react-router';

//各个demo页面component
import App from './pages/App/App.react';
import Sidebar from './pages/App/Sidebar.react';
import Main from './pages/App/Main.react';
import NoMatch from './pages/App/NoMatch.react';
import ArticleList from './pages/App/Components/ArticleList.react';

//react
import FunctionBind from './pages/React/FunctionBind.react';
import Table from './pages/React/Table/Table.react';
import DynamicInlineStyle from './pages/React/DynamicInlineStyle.react';
import Ref from './pages/React/Ref/Ref.react';
import StateLessFunctionalComponent from './pages/React/StateLessFunctionalComponent.react';
import ThisPropsChildren from './pages/React/ThisPropsChildren/ThisPropsChildren.react';
import InheritComponent from './pages/React/InheritComponent/InheritComponent.react';
import SetChildrenReactElementStyle from './pages/React/SetChildrenReactElementStyle.react';
import InsertAnElementOnMouseOver from './pages/React/InsertAnElementOnMouseOver.react';
import JSXArrayDom from './pages/React/JSXArrayDom.react';
import AudioPlayer from './pages/React/AudioPlayer.react';
import HorizontalScroll from './pages/React/HorizontalScroll.react';
import AjaxInConstructor from './pages/React/AjaxInConstructor.react';
import CallChildComponentMethod from './pages/React/CallChildComponentMethod.react';
import PassAsyncDataToChildComponent from './pages/React/PassAsyncDataToChildComponent/PassAsyncDataToChildComponent.react';
import HOC from './pages/React/HOC/HOC.react';
import FilterBarExample from './pages/React/Filter.react';
import ComposableComponent from './pages/React/ComposableComponent/ComposableComponent.react';
import CountDownPage from './pages/React/CountDownPage.react';
import IOSScrollEvent from './pages/React/IOSScrollEvent.react';
import DownloadAllTest from './pages/React/DownloadAllTest.react';
import LoopScroll from './pages/React/LoopScroll.react';
import GrabChildComponentState from './pages/React/GrabChildComponentState/GrabChildComponentState.react';

//react-router
import GetEveryTypeParams from './pages/React-router/GetEveryTypeParams.react';
import RouterWillLeave from './pages/React-router/RouterWillLeave.react';
import TransitionToAllWays from './pages/React-router/TransitionToAllWays.react';
import NamesComponent from './pages/React-router/NamesComponent.react';

//redux

//react-redux

//react-dom
import CallReactDOMRenderInParentComponent from './pages/React-dom/CallReactDOMRenderInParentComponent.react';


import Form from './pages/Form.react';
import Redux01 from './pages/Redux01.react';
import TodoList from './pages/TodoList.react';
import Redux02 from './pages/Redux02.react';
import ReactRedux01 from './pages/ReactRedux01.react';
import ReactRedux02 from './pages/ReactRedux02.react';
import ReactRedux03 from './pages/ReactRedux03.react';
import ReduxAPIMiddleware from './pages/ReduxAPIMiddleware.react';
import OnMouseOverComponent from './components/ReactChinaQuestions/onMouseOver.react';
import DomRerenderOrAppendNew from './components/ReactChinaQuestions/domRerenderOrAppendNew.react';
import ScrollTop from './pages/ScrollTop.react';
import ModalInput from './pages/ModalInput.react';
import Redux03Middleware from './pages/Redux03-middleware.react';
import ChangeStateTreeRefData from './pages/ChangeStateTreeRefData';
import InitStateTreeData from './pages/initStateTreeData.react';
import MobileInputFocusAndKeyboard from './pages/MobileInputFocusAndKeyboard.react';
import IframePage from './pages/iframe.react';
import IOSInputFocus from './pages/IOSInputFocus.react';
import AsyncActionInComponentWillReceiveProps from './pages/AsyncActionInComponentWillReceiveProps.react';
import InputPage from './pages/InputPage.react';
import Redirect from './pages/Redirect.react';


//定义路由规则
const routes = (
    //导航首页，导航到各个demo页面
    <Route path='/' component={App}>
        <IndexRedirect to='/react'/>
        <Route path='react' components={{sidebar: Sidebar, main: Main}}>
            <IndexRoute component={ArticleList}/>
            <Route path='function-bind' component={FunctionBind}/>
            <Route path='react-component-with-es5-es6-es7-syntax' component={Table}></Route>
            <Route path='dynamic-inline-style' component={DynamicInlineStyle}></Route>
            <Route path='refs-to-component' component={Ref}></Route>
            <Route path='stateless-functional-component' component={StateLessFunctionalComponent}></Route>
            <Route path='this-props-children' component={ThisPropsChildren}></Route>
            <Route path='inherit-component' component={InheritComponent}></Route>
            <Route path='set-children-react-element-style' component={SetChildrenReactElementStyle}></Route>
            <Route path='insert-an-element-on-mouseover' component={InsertAnElementOnMouseOver} /> 
            <Route path='jsx-array-dom' component={JSXArrayDom}></Route>
            <Route path='react-audioplayer' component={AudioPlayer}></Route>
            <Route path='horizontal-scroll' component={HorizontalScroll}></Route>
            <Route path='ajax-in-constructor' component={AjaxInConstructor}></Route>
            <Route path='call-child-component-method' component={CallChildComponentMethod} />
            <Route path='pass-async-data-to-child-component' component={PassAsyncDataToChildComponent}></Route>
            <Route path='high-order-component' component={HOC}></Route>
            <Route path='react-filter-bar' component={FilterBarExample}></Route>
            <Route path='composable-component' component={ComposableComponent}></Route>
            <Route path='count-down' component={CountDownPage}></Route>
            <Route path='ios-scroll-event-block-js-thread' component={IOSScrollEvent}></Route>
            <Route path='download-all' component={DownloadAllTest}></Route>
            <Route path='loop-scroll' component={LoopScroll}></Route>
            <Route path='grab-child-component-state' component={GrabChildComponentState}></Route>
        </Route>
        <Route path='react-dom' components={{sidebar: Sidebar, main: Main}}>
            <IndexRoute component={ArticleList}/>
            <Route path='call-react-dom-render-in-parent-component' component={CallReactDOMRenderInParentComponent}/>
        </Route>
        <Route path='react-router' components={{sidebar: Sidebar, main: Main}}>
            <IndexRoute component={ArticleList}/>
            <Route path='get-every-type-params(/:page)' component={GetEveryTypeParams}></Route>
            <Route path='router-will-leave' component={RouterWillLeave}></Route>
            <Route path='transition-to-all-ways' component={TransitionToAllWays}></Route>
            <Route path='names-component' component={NamesComponent}>
                <IndexRoute components={{main: Main, sidebar: Sidebar}}/>
            </Route>
        </Route>
        <Route path='redux' components={{sidebar: Sidebar, main: Main}}>
            <IndexRoute component={ArticleList}/>
        </Route>
        <Route path='react-redux' components={{sidebar: Sidebar, main: Main}}>
            <IndexRoute component={ArticleList}/>
        </Route>

        <Route path='form' component={Form}></Route>
        <Route path='redux01' component={Redux01}></Route>
        <Route path='redux02' component={Redux02}></Route>
        <Route path='todoList' component={TodoList}></Route>
        <Route path='react-redux01' component={ReactRedux01}></Route>
        <Route path='react-redux02' component={ReactRedux02}></Route>
        <Route path='react-redux03' component={ReactRedux03}></Route>
        <Route path='redux-api-middware' component={ReduxAPIMiddleware}></Route>
       
        <Route path='onMouseOver' component={OnMouseOverComponent}></Route>
        <Route path='domRerenderOrAppendNew' component={DomRerenderOrAppendNew}></Route>
        <Route path='ScrollTop' component={ScrollTop}></Route>
        <Route path='modal-input' component={ModalInput}></Route>
        <Route path='redux03-middleware' component={Redux03Middleware}></Route>
        <Route path='changeStateTreeRefData' component={ChangeStateTreeRefData}></Route>
        <Route path="initStateTreeData" component={InitStateTreeData}></Route>
        <Route path='MobileInputFocusAndKeyboard' component={Redirect}></Route>
        <Route path='focus' component={MobileInputFocusAndKeyboard}/>
        <Route path='iframe' component={IframePage}></Route>
        <Route path='ios-input-focus' component={IOSInputFocus}></Route>
        <Route path='async-action-in-componentWillReceiveProps' component={AsyncActionInComponentWillReceiveProps}></Route>
        <Route path='input' component={InputPage}/>
        <Route path='importImage' getComponent={(nextState, cb) => {
            cb(null, require('./pages/importImage.react'))
        }} />
        <Route path='*' component={NoMatch}></Route>
    </Route>
);

//路由改造: 一，JS原始对象的形式,同步加载方式
// const routes = {
//     path: '/',
//     component: App,
//     childRoutes: [
//         {path: 'table', component: Table},
//         {path: 'form', component: Form}
//     ]
// };

//路由改造：二，同步加载方式，不同于改造前静态import, 静态import，打包后的代码要马上执行很多__webpack_require__(moduleid),
// 改造后，代码打包后的__webpack_require__(moduleid)不执行，而是延后到具体路由加载的时候执行
//打包的js文件没有[id].chunk.js，还是一次性将所有代码打包到一个文件，所以下载也是下载整个bundle文件，这点和异步加载生成单独chunk.js文件的方式不同。

// import App from './pages/App.react';
// const routes = {
//     path: '/',
//     component: App,
//     childRoutes: [
//         {
//             path: 'table', 
//             getComponent: (nextState, cb) => {
//                 const tableComponent = require('./pages/Table.react');
//                 cb(null, tableComponent);
//             }
//         },
//         {
//             path: 'Form',
//             getComponent: (nextState, cb) => cb(null, require('./pages/Form.react'))
//         }
//     ]
// }

//路由改造：三，异步加载方式，每个异步加载的模块生成单独的[id].chunk.js，根据路由动态加载（向服务器请求并下载）该模块的路由和组件文件(chunk.js)
// import App from './pages/App.react';
// const routes = {
//     path: '/',
//     component: App,
//     getChildRoutes(partialNextState, cb) {
//         //partialNextState是react-router的Link的{pathname, query, state}中的state
//         //使用partialNextState做一些逻辑处理，决定加载哪个route
//         require.ensure([], require => {
//             const tableRoute = require('./routes/Table');
//             cb(null, [
//                 tableRoute,
//                 require('./routes/Form')
//             ]);
//         })
//     }
// }


export default routes;
