import React, {Component} from 'react';

class RCcount extends Component {
    render() {
        const count = React.Children.count(this.props.children);
        return <div>
            <h3><code>React.Children.count</code></h3>
            <p>children count: {count}</p>
            {this.props.children}
        </div>
    }
}

export default RCcount;