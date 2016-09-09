import React, {Component, PropTypes} from 'react';
import Todo from './Todo.react';

class Todos extends Component {
    static propTypes = {
        todoClickHandler: PropTypes.func.isRequired,
        todos: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        }).isRequired).isRequired
    }

    constructor() {
        super();
        this.markAll = ::this.markAll;   
    }

    render() {
        const {todos} = this.props;
        const todoItems = todos.map((todo, index) => {
            return <Todo {...todo} key={index} onClick={e => this.handleToggleTodo(e, index)}></Todo>
        });
        return (
            <section id='main'>
                <input type="checkbox" id="toggle-all" onClick={this.handleMarkAll}/>
                <label for="toggle-all">Mark all as complete</label>
                <ul id='todo-list'>{todoItems}</ul>
            </section>
        );
    }

    handleToggleTodo(index) {
        const {toggleTodo} = this.props;
        toggleTodo && toggleTodo(index);
    }

    handleMarkAll() {
        const {markAll} = this.props;
        markAll && markAll();
    }
}

export default Todos;
