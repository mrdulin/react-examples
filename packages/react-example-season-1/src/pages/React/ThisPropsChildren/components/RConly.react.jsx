import React, {Component} from 'react';

class RConly extends Component {
    render() {
        const onlyChild = React.Children.only(this.props.children);
        console.assert(React.Children.only(this.props.children) === this.props.children, 'React.Children.only(this.props.children)和this.props.children全等');
        
        return <div>
            <h3><code>React.Children.only</code></h3>
            <p>当组件没有包含子元素，或者包含的直接子元素的个数大于1个时，报如下错误</p>
            <p><code>Uncaught Invariant Violation: onlyChild must be passed a children with exactly one child.</code></p>
            <p><code>React.Children.only(this.props.children) === this.props.children</code></p>
            {onlyChild}
        </div>
    }
}

export default RConly;