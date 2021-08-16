import React, {Component, PropTypes} from 'react';
import {ActionCreators} from 'redux-undo';
import {connect} from 'react-redux';

import AddTodo from './components/AddTodo.react';
import Todos from './components/Todos.react';
import Footer from './components/Footer.react';
import * as Action from '../../../actions/TodoList.action';

class TodoList extends Component{

    static propTypes = {
        todosFiltered: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        }).isRequired).isRequired,

        filter: PropTypes.oneOf([
            'SHOW_ALL',
            'SHOW_ACTIVE',
            'SHOW_COMPLETE'
        ]).isRequired
    }

    render() {
        const {dispatch, todosFiltered, filter} = this.props;
        return (
            <section id='todoapp'>
                <AddTodo addTodo={(text) => {this.addTodo(text)}}></AddTodo>
                <Todos todos={todosFiltered} toggleTodo={index => this.toggleTodo(index)} markAll={() => this.markAll()}></Todos>
                <Footer currentFilter={filter} onFilterChange={filter => this.onFilterChange(filter)} todoCount={todosFiltered.length}></Footer>
            </section>
        );
    }

    addTodo(text) {
        this.props.dispatch(Action.addTodo(text));
    }

    toggleTodo(index) {
        this.props.dispatch(Action.toggleTodo(index));
    }

    onFilterChange(filter) {
        this.props.dispatch(Action.setFilter(filter));
    }
}

//state中present的todos，需要根据state.visibilityFilter的过滤条件过滤
//最后通过connect注入到TodoList组件props上的visibleTodos是过滤后的数据
// const selectTodos = (todos, filter) => {
//     switch (filter) {
//         case VisibilityFilters.SHOW_ALL:
//             return todos;
//         case VisibilityFilters.SHOW_ACTIVE:
//             return todos.filter((todo) => !todo.completed);
//         case VisibilityFilters.SHOW_COMPLETE:
//             return todos.filter((todo) => todo.completed);
//     }
// };

//该函数的作用是从store的state tree上取出业务逻辑需要的数据，经过逻辑处理后，返回一个对象，这个对象就是需要注入到组件中数据。
//将这个函数(这里是select)传入connect方法，将该函数返回的对象，注入到TodoList组件中
//常见的方法名是mapStateToProps
// const select = (state) => {
//     const presentTodos = state.todos.present;
//     const visibleTodos = selectTodos(presentTodos, state.visibilityFilter);
//     return {
//         undoDisabled: state.todos.past.length === 0,
//         redoDisabled: state.todos.future.length === 0,
//         visibleTodos,
//         visibilityFilter: state.visibilityFilter
//     }
// };

const mapStateToProps = (state) => {
    return {...state.TodoList};
};

export default connect(mapStateToProps)(TodoList);
