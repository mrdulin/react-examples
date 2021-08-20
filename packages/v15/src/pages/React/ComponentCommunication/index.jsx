import React, {Component} from 'react';

class AComponent extends Component{
    constructor() {
        super();
        this.handleClick = ::this.handleClick;
        this.state = {message: ''}
    }
    render() {
        console.count('AComponent render')
        return <div style={{border: '1px solid red', margin: '20px'}}>
            <p>A component {this.state.message}</p>
            <BComponent onClick={this.handleClick}></BComponent>
        </div>
    }

    handleClick(data) {
        const {onClick} = this.props;
        this.setState({message: data.messageA});
        //中间层组件产生的额外的数据，一并返回给顶层组件
        const dataExt = {
            ext: 'css is awesome'
        }
        onClick && onClick(Object.assign({}, data, dataExt));
    }
}

class BComponent extends Component{
    constructor() {
        super();
        this.handleClick = ::this.handleClick;
        this.state = {message: ''}
    }
    render() {
        console.count('BComponent render')
        return <div style={{border: '1px solid blue', margin: '20px'}}>
            <p>B component {this.state.message}</p>
            <button type='button' onClick={this.handleClick}>emit</button>
        </div>
    }

    handleClick(e) {
        const {onClick} = this.props;
        const data = {
            messageA: 'react is awesome',
            messageB: 'angular is awesome',
            message: 'jquery is awesome'
        }
        this.setState({message: data.messageB});
        onClick && onClick(data);
    }
}

class ComponentCommunication extends Component{
    constructor() {
        super();
        this.handleClick = ::this.handleClick;
        this.state = {message : '', ext: ''};
    }
    render() {
        console.count('ComponentCommunication render')
        return <div style={{border: '1px solid green', margin: '20px'}}>
            <p>container component {this.state.message}</p>
            <p>ext: {this.state.ext}</p>
            <AComponent onClick={this.handleClick}></AComponent>
        </div>
    }

    handleClick(data) {
        this.setState({message: data.message, ext: data.ext});
    }
}

export default ComponentCommunication;


