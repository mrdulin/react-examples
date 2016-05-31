import React, {Component, PropTypes} from 'react';

class AddTodo extends Component{
    static propTypes = {
        onAddClick: PropTypes.func.isRequired
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => {this.addTodoSubmit(e)}}>
                    <label>
                        <input ref='add_todo_input' type="text" placeholder="add a todo item"/>
                    </label>
                    <button type="submit">add</button>
                </form>
            </div>
        );
    }

    addTodoSubmit(e) {
        e.preventDefault();
        let node = this.refs.add_todo_input;
        let text = node.value.trim();
        if(!text.length) return;
        this.props.onAddClick(text);
        node.value = '';
    }
}

export default AddTodo;
