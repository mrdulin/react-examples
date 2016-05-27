import React, {Component} from 'react';
import AddTodo from '../components/todoList/AddTodo.react';
import Todos from '../components/todoList/Todos.react';
import Footer from '../components/todoList/Footer.react';

class TodoList extends Component{
    static defaultProps = {
        todoDatas: [
            {text: 'learn angular', completed: false},
            {text: 'learn react', completed: true},
            {text: 'learn jquery', completed: false}
        ]
    }
    render() {
        return (
            <div>
                <AddTodo onAddClick={(text) => {console.log('add todo:', text)}}></AddTodo>
                <Todos todos={this.props.todoDatas} todoClickHandler={(todo) => {this.todoClickHandler(todo)}}></Todos>
                <Footer filter='SHOW_ALL' onFilterChange={(filter) => {this.filterChange(filter)}}></Footer>
            </div>
        );
    }

    todoClickHandler(todo) {
        console.log('todo click ', todo);
    }

    filterChange(filter) {
        console.log('filter change: ', filter);
    }

}

export default TodoList;
