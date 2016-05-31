import React, {Component, PropTypes} from 'react';
import {ActionCreators} from 'redux-undo';

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
        }).isRequired).isRequired,

        visibilityFilter: PropTypes.oneOf([
            'SHOW_ALL',
            'SHOW_ACTIVE',
            'SHOW_COMPLETE'
        ]).isRequired
    }

    render() {
        const { dispatch, visibleTodos, visibilityFilter, undoDisabled, redoDisabled} = this.props;
        // console.log(this.props);
        // console.log('render this', this);
        let scope = this;
        return (
            <div>
                <AddTodo onAddClick={(text) => {scope.addTodo(text)}}></AddTodo>
                <Todos todos={visibleTodos} todoClickHandler={(index) => {scope.todoClickHandler(index)}}></Todos>
                <Footer filter={visibilityFilter}
                    onFilterChange={(filter) => {scope.onFilterChange(filter)}}
                    onUndo={() => {scope.onUndo()}}
                    onRedo={() => {scope.onRedo()}}
                    todoCount={visibleTodos.length}
                    undoDisabled={undoDisabled}
                    redoDisabled={redoDisabled}>
                </Footer>
            </div>
        );
    }

    onRedo() {
        this.props.dispatch(ActionCreators.redo());
    }

    onUndo() {
        this.props.dispatch(ActionCreators.undo());
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
    const presentTodos = state.todos.present;
    const visibleTodos = selectTodos(presentTodos, state.visibilityFilter);
    return {
        undoDisabled: state.todos.past.length === 0,
        redoDisabled: state.todos.future.length === 0,
        visibleTodos,
        visibilityFilter: state.visibilityFilter
    }
};

export default connect(select)(TodoList);
