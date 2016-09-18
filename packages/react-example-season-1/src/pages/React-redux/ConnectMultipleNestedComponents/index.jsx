import React, {Component} from 'react';
import {connect} from 'react-redux';
import AA from './components/AComponent.react';

const mapStateToProps = state => ({
    ConnectMultipleNestedComponents: state.ConnectMultipleNestedComponents
});

class ConnectMultipleNestedComponents extends Component{
    render() {
        const {message} = this.props.ConnectMultipleNestedComponents;
        console.count('ConnectMultipleNestedComponents render')
        return <div style={{border: '1px solid green', margin: '20px'}}>
            <p>container component {message}</p>
            <AA></AA>
        </div>
    }
}

export default connect(mapStateToProps)(ConnectMultipleNestedComponents);