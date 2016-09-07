import React, {Component, PropTypes} from 'react';
import BaseComponent from './components/BaseComponent.react';
import ReceiveContext from './components/ReceiveContext.react';

class InheritComponent extends BaseComponent{

    state = {
        title: ''
    };

    constructor(props, context) {
        //props包含了React.Component的props和BaseComponent中定义的props
        // console.log(props)
        // super(props);
        // console.log(this);
        console.log(super(props, context))
        // console.log(super(props, context));
        // console.log(props);
        // console.log(context);

    }

    getChildContext() {
        return {color: 'lightgreen'};
    }

    componentDidMount() {
        const title = this.setTitle('组件继承');
        this.setState({title});
    }

    render() {
        return <div>
            <p>I inherit BaseComponent</p>
            <p>current title is {this.state.title}</p>
            <ReceiveContext />
        </div>
    }
}

InheritComponent.childContextTypes = {
    color: PropTypes.string
}

export default InheritComponent;
