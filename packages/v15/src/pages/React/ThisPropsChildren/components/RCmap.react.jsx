import React, {Component} from 'react';

class RCmap extends Component{
    render() {
        const childDoms = React.Children.map(this.props.children, (child) => {
            console.log(child);
            return child;
        });
        return <div>
            <h3><code>React.Children.map</code></h3>
            {childDoms}
        </div>
    }
}
export default RCmap;