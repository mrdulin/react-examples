import {
	todos,
	visibilityFilter
} from './redux01';
import {
	user,
	polling
} from './redux02';
import {
	combineReducers
} from 'redux';
import undoable, {
	distinctState
} from 'redux-undo';
import * as reactRedux01Reducers from './reactRedux01';
import * as reduxApiMiddlewareReducers from './reduxApiMiddleware';
import * as reactRedux02Reducers from './reactRedux02';
import * as reactRedux03Reducers from './reactRedux03';
import * as scrollTop from './scrollTop.reducer';
import * as redux03 from './redux03';
import * as InitStateTreeData from './InitStateTreeData.reducer';
import * as AsyncActionInCWRP from './AsyncActionInCWRP.reducer';

//通过combineReducers合成reducer后，state的数据结构就为{todos: [], visibilityFilter: ''}
//传入combineReducers的对象的key名就是state对象的key名，combineReducers的对象的key对应的reducer函数名，可以与key名相同，也可以不同，
//与key名相同的好处就是，在使用ES6语法的时候，如果一个对象的key和value相同，那么可以简写为{key},等同于es5的{key: key}

//这里使用了redux-undo模块，用来实现action的undo,redo功能，使用之前的state的todos的数据结构是{todos: []}，
//使用该模块后，它将数据结构转换为{todos: {future: [], history: {...}, present: [], past: []}}
//这时候'todos'reducer操作的应该是present字段对应的数据

// console.log(reactRedux01Reducers);
const rootReducer = combineReducers({
	todos: undoable(todos, {
		filter: distinctState()
	}),
	visibilityFilter,
	user,
	polling,
	...reactRedux01Reducers,
	...reactRedux02Reducers,
	...reactRedux03Reducers,
	...reduxApiMiddlewareReducers,
	...scrollTop,
	...redux03,
	...InitStateTreeData,
    ...AsyncActionInCWRP
});

export default rootReducer;
