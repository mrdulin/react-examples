import {combineReducers} from 'redux';
import {TodoList} from './TodoList.reducer';
import undoable, {distinctState} from 'redux-undo';

import * as MapStateToProps from './MapStateToProps.reducer';
import * as reduxApiMiddlewareReducers from './reduxApiMiddleware';
import * as InjectActionCreatorsToComponentProps from './InjectActionCreatorsToComponentProps.reducer';
import * as MapDispatchToProps from './MapDispatchToProps.reducer';
import * as ChangeStateTreeRefData from './ChangeStateTreeRefData.reducer';
import * as scrollTop from './scrollTop.reducer';
import * as DefineReduxStateDataStructure from './DefineReduxStateDataStructure';
import * as InitReduxStateTreeDataInComponentWillMount from './InitReduxStateTreeDataInComponentWillMount.reducer';
import * as AsyncActionInComponentWillReceiveProps from './AsyncActionInComponentWillReceiveProps.reducer';
import * as common from './common.reducer';
import * as FileIO from './FileIO.reducer';
import * as AutoComplete from './AutoComplete.reducer';
import * as Es6ComponentInheritEs5Component from './Es6ComponentInheritEs5Component.reducer';
import * as CheckDataInStateAndNewCreateStoreStateIsSameWhenDispatchAction from './CheckDataInStateAndNewCreateStoreStateIsSameWhenDispatchAction.reducer';
import * as ConnectMultipleNestedComponents from './ConnectMultipleNestedComponents.reducer';

//通过combineReducers合成reducer后，state的数据结构就为{todos: [], visibilityFilter: ''}
//传入combineReducers的对象的key名就是state对象的key名，combineReducers的对象的key对应的reducer函数名，可以与key名相同，也可以不同，
//与key名相同的好处就是，在使用ES6语法的时候，如果一个对象的key和value相同，那么可以简写为{key},等同于es5的{key: key}

//这里使用了redux-undo模块，用来实现action的undo,redo功能，使用之前的state的todos的数据结构是{todos: []}，
//使用该模块后，它将数据结构转换为{todos: {future: [], history: {...}, present: [], past: []}}
//这时候'todos'reducer操作的应该是present字段对应的数据

// console.log(reactRedux01Reducers);
const rootReducer = combineReducers({
	TodoList,
	// todos: undoable(todos, {
	// 	filter: distinctState()
	// }),
	...ChangeStateTreeRefData,
	...MapStateToProps,
	...InjectActionCreatorsToComponentProps,
	...MapDispatchToProps,
	...reduxApiMiddlewareReducers,
	...scrollTop,
	...DefineReduxStateDataStructure,
	...InitReduxStateTreeDataInComponentWillMount,
    ...AsyncActionInComponentWillReceiveProps,
	...common,
	...FileIO,
	...AutoComplete,
	...Es6ComponentInheritEs5Component,
	...CheckDataInStateAndNewCreateStoreStateIsSameWhenDispatchAction,
	...ConnectMultipleNestedComponents
});

export default rootReducer;
