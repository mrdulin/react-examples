import React, {Component} from 'react';

class WrappedComponent extends Component{
    render() {
        return (
            <div>WrappedComponent</div>
        );
    }
}

function ppHOC(WrappedComponent) {
    return class extends Component{
        render() {
            return <WrappedComponent {...this.props}/>
        }
    }
}

export default ppHOC(WrappedComponent);
