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
import CreateIframe from './pages/React/CreateIframe.react';
import InputTypeText from './pages/React/FormControl/InputTypeText.react';
import SetModalWindowPositionOnInputFocus from './pages/React/SetModalWindowPositionOnInputFocus.react';
import InputTypeCheckbox from './pages/React/FormControl/InputTypeCheckbox.react';
import MobileInputFocusVistualKeyboard from './pages/React/MobileInputFocusVistualKeyboard.react';
import LogicalOperators from './pages/React/LogicalOperators.react';
import StaticMethod from './pages/React/StaticMethod.react';
import ComponentCommunication from './pages/React/ComponentCommunication';
import ComponentDidUpdateInputFocus from './pages/React/ComponentDidUpdateInputFocus.react';

//react-router
import GetEveryTypeParams from './pages/React-router/GetEveryTypeParams.react';
import RouterWillLeave from './pages/React-router/RouterWillLeave.react';
import TransitionToAllWays from './pages/React-router/TransitionToAllWays.react';
import NamesComponent from './pages/React-router/NamesComponent.react';
import CreatePath from './pages/React-router/CreatePath.react';


//redux
import ReduxBeginning from './pages/Redux/ReduxBeginning.react';
import CreateStoreInComponentCompareWithConnectState from './pages/Redux/CreateStoreInComponentCompareWithConnectState.react';
import CheckDataInStateAndNewCreateStoreStateIsSameWhenDispatchAction from './pages/Redux/CheckDataInStateAndNewCreateStoreStateIsSameWhenDispatchAction.react';
//react-redux
import InitReduxStateTreeDataInComponentWillMount from './pages/React-redux/InitReduxStateTreeDataInComponentWillMount.react';
import DefineReduxStateDataStructure from './pages/React-redux/DefineReduxStateDataStructure.react';
import MapStateToProps from './pages/React-redux/MapStateToProps/MapStateToProps.react';
import InjectActionCreatorsToComponentProps from './pages/React-redux/InjectActionCreatorsToComponentProps.react';
import MapDispatchToProps from './pages/React-redux/MapDispatchToProps.react';
import ChangeStateTreeRefData from './pages/React-redux/ChangeStateTreeRefData.react';
import AsyncActionInComponentWillReceiveProps from './pages/React-redux/AsyncActionInComponentWillReceiveProps.react';
import AutoCompletePage from './pages/React-redux/AutoComplete';
import Es6ComponentInheritEs5Component from './pages/React-redux/Es6ComponentInheritEs5Component.react';
import ConnectMultipleNestedComponents from './pages/React-redux/ConnectMultipleNestedComponents';
import InjectStateToEs5ComponentMixins from './pages/React-redux/InjectStateToEs5ComponentMixins.react';
import TestApiMiddleware from './pages/React-redux/TestApiMiddleware.react';

//react-dom
import CallReactDOMRenderInParentComponent from './pages/React-dom/CallReactDOMRenderInParentComponent.react';


//mini-projects
import AdorableAvatars from './pages/Mini-projects/AdorableAvatars/AdorableAvatars.react';
import FileIO from './pages/Mini-projects/FileIO/FileIO.react';
import TodoList from './pages/Mini-projects/TodoList/TodoList.react';

//待整理例子
import Form from './pages/Form.react';
import ReduxAPIMiddleware from './pages/ReduxAPIMiddleware.react';
import ScrollTop from './pages/ScrollTop.react';


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
            <Route path='create-iframe' component={CreateIframe}></Route>
            <Route path='set-modal-window-position-on-input-focus' component={SetModalWindowPositionOnInputFocus}></Route>
            <Route path='input-type-text' component={InputTypeText}/>
            <Route path='input-type-checkbox' component={InputTypeCheckbox}></Route>
            <Route path='mobile-input-focus-vistual-keybroad' component={MobileInputFocusVistualKeyboard}/>
            <Route path='logical-operators' component={LogicalOperators}/>
            <Route path='static-method' component={StaticMethod}/>
            <Route path='component-communication' component={ComponentCommunication}/>
            <Route path='componentDidUpdate-input-focus' component={ComponentDidUpdateInputFocus}/>
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
            <Route path='create-path' component={CreatePath}/>
        </Route>
        <Route path='redux' components={{sidebar: Sidebar, main: Main}}>
            <IndexRoute component={ArticleList}/>
            <Route path='redux-beginning' component={ReduxBeginning}/>
            <Route path='create-store-in-component-compare-with-connect-state' component={CreateStoreInComponentCompareWithConnectState}/>
            <Route path='check-data-in-state-and-new-createStore-state-is-same-when-dispatch-action' component={CheckDataInStateAndNewCreateStoreStateIsSameWhenDispatchAction}/>
        </Route>
        <Route path='react-redux' components={{sidebar: Sidebar, main: Main}}>
            <IndexRoute component={ArticleList}/>
            <Route path="init-store-data-in-componentWillMount-when-go-back" component={InitReduxStateTreeDataInComponentWillMount}></Route>
            <Route path='define-redux-state-data-structure' component={DefineReduxStateDataStructure}></Route>
            <Route path='map-state-to-props' component={MapStateToProps}></Route>
            <Route path='inject-action-creators-to-component-props' component={InjectActionCreatorsToComponentProps}></Route>
            <Route path='map-dispatch-to-props' component={MapDispatchToProps}></Route>
            <Route path='change-state-reference-type-data' component={ChangeStateTreeRefData}></Route>
            <Route path='async-action-in-componentWillReceiveProps' component={AsyncActionInComponentWillReceiveProps}></Route>
            <Route path='auto-complete-page' component={AutoCompletePage}/>
            <Route path='es6-component-inherit-es5-component' component={Es6ComponentInheritEs5Component}></Route>
            <Route path='connect-multiple-nested-components' component={ConnectMultipleNestedComponents}/>
            <Route path='inject-state-to-es5-component-mixins' component={InjectStateToEs5ComponentMixins}/>
            <Route path='test-api-middleware' component={TestApiMiddleware}/>
        </Route>
        <Route path='mini-projects' components={{sidebar: Sidebar, main: Main}}>
            <IndexRoute component={ArticleList}/>
            <Route path='adorable-avatar' component={AdorableAvatars}></Route>
            <Route path='file-io' component={FileIO}></Route>
            <Route path='todoList' component={TodoList}></Route>
        </Route>

        <Route path='form' component={Form}></Route>
        <Route path='redux-api-middware' component={ReduxAPIMiddleware}></Route>
        <Route path='ScrollTop' component={ScrollTop}></Route>

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
