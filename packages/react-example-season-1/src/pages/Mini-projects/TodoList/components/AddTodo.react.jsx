import React, {Component, PropTypes} from 'react';

class AddTodo extends Component{
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

    render() {
        return (
            <header id='header'>
                <h1>todos</h1>
                <form id='todo-form' onSubmit={(e) => {this.addTodoSubmit(e)}}>
                    <input id='new-todo' ref='add_todo_input' type="text" placeholder="What needs to be done?" autofocus/>
                </form>
            </header>
        );
    }

    addTodoSubmit(e) {
        const {addTodo} = this.props;
        e.preventDefault();
        let node = this.refs.add_todo_input;
        let text = node.value.trim();
        if(!text.length) return;
        addTodo && addTodo(text);
        node.value = '';
    }
}

export default AddTodo;
