import React, {Component, PropTypes} from 'react';

class Todo extends Component{
    static propTypes = {
        onClick: PropTypes.func.isRequired
    }

    render() {
        return (
            <li style={{
                    textDecoration: this.props.completed ? 'line-through' : 'none',
                    cursor: this.props.completed ? 'default' : 'pointer'
                }}
                onClick={this.props.onClick}>
                {this.props.text}
            </li>
        );
    }
}

export default Todo;
