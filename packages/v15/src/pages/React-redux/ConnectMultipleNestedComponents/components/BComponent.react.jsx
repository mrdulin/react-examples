import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as Action from '../../../../actions/ConnectMultipleNestedComponents.action';

const BB = class BComponent extends Component{
    constructor() {
        super();
        this.handleClick = ::this.handleClick;
    }
    render() {
        const {messageB} = this.props.ConnectMultipleNestedComponents;
        console.count('BComponent render')

        return <div style={{border: '1px solid red', margin: '20px'}}>
            <p>B component {messageB}</p>
            <button type='button' onClick={this.handleClick}>click me!</button>
        </div>
    }

    handleClick() {
        const {dispatch} = this.props;
        dispatch(Action.updateMessage('messageB', 'angular is awesome'));
    }
}

const mapStateToProps = state => ({
    ConnectMultipleNestedComponents: state.ConnectMultipleNestedComponents
});

export default connect(mapStateToProps)(BB);
