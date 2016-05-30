import React, {Component, PropTypes} from 'react';
import AddTodo from '../components/todoList/AddTodo.react';
import Todos from '../components/todoList/Todos.react';
import Footer from '../components/todoList/Footer.react';

import {connect} from 'react-redux';
import {addTodo, completeTodo, setVisibilityFilter, VisibilityFilters} from '../actions/redux01';

class TodoList extends Component{
    static defaultProps = {
        // todoDatas: [
        //     {text: 'learn angular', completed: false},
        //     {text: 'learn react', completed: true},
        //     {text: 'learn jquery', completed: false}
        // ]
    }

    static propTypes = {
        visibleTodos: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        })),
        visibilityFilter: PropTypes.oneOf([
            'SHOW_ALL',
            'SHOW_ACTIVE',
            'SHOW_COMPLETE'
        ]).isRequired
    }

    render() {
        // const { dispatch, visibleTodos, VisibilityFilters} = this.props;
        console.log(this.props);
        console.log('render this', this);
        let scope = this;
        return (
            <div>
                <AddTodo onAddClick={(text) => {scope.addTodo(text)}}></AddTodo>
                <Todos todos={this.props.visibleTodos} todoClickHandler={(index) => {scope.todoClickHandler(index)}}></Todos>
                <Footer filter={this.props.visibilityFilter} onFilterChange={(filter) => {scope.onFilterChange(filter)}}></Footer>
            </div>
        );
    }

    addTodo(text) {
        this.props.dispatch(addTodo(text));
    }

    todoClickHandler(index) {
        this.props.dispatch(completeTodo(index));
    }

    onFilterChange(filter) {
        this.props.dispatch(setVisibilityFilter(filter));
    }
}


const selectTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter((todo) => !todo.completed);
        case VisibilityFilters.SHOW_COMPLETE:
            return todos.filter((todo) => todo.completed);
    }
};


const select = (state) => {
    return {
        visibleTodos: selectTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    }
};

export default connect(select)(TodoList);
