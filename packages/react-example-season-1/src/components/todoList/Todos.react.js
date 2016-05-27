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

    render() {
        const todos = this.props.todos.map((todo, index) => {
            return <Todo {...todo} key={index} onClick={this.props.todoClickHandler}></Todo>
        });
        return (
            <ul>{todos}</ul>
        );
    }
}

export default Todos;
