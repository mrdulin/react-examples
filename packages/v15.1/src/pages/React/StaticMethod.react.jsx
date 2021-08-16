import React, {Component} from 'react';

class StaticMethod extends Component{
    static setTitle(title) {
        document.title = title || ''
    }
    render() {
        return <div>
            React Component Static Method
            {StaticMethod.setTitle('React Component Static Method')}
        </div>
    }
}

// StaticMethod.setTitle('React Component Static Method');

export default StaticMethod;

