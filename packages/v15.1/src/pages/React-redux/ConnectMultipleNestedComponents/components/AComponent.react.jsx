import React, {Component} from 'react';
import {connect} from 'react-redux';
import BB from './BComponent.react';
import * as Action from '../../../../actions/ConnectMultipleNestedComponents.action';

class AComponent extends Component{
    render() {
        const {messageA} = this.props.ConnectMultipleNestedComponents;
        console.count('AComponent render')

        return <div style={{border: '1px solid blue', margin: '20px'}}>
            <p>A component {messageA}</p>
            <BB ></BB>
        </div>
    }

}

const mapStateToProps = state => ({
    ConnectMultipleNestedComponents: state.ConnectMultipleNestedComponents
});

export default connect(mapStateToProps)(AComponent);
