import React, {Component} from 'react';
import BaseComponent from '../components/BaseComponent.react';

class InheritComponent extends BaseComponent{

    state = {
        title: ''
    };

    constructor(props) {
        //props包含了React.Component的props和BaseComponent中定义的props
        // console.log(props)
        // console.log(super);
        super(props);
        console.log(this);
    }

    componentDidMount() {
        const title = this.setTitle('组件继承');
        this.setState({title});
    }

    render() {
        return <div>
            <p>I inherit BaseComponent</p>
            <p>current title is {this.state.title}</p>
        </div>
    }
}

export default InheritComponent;
