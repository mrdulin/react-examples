import React, {Component, PropTypes} from 'react';

const Enhance = ({title = 'No Title'}) => ComposedComponent => class extends Component{

    static defaultProps = {
        title: ''
    }

    state = {
        val: 1
    };
    constructor() {
        super();
        const funcNames = ['update'];
        for(let funcName of funcNames) {
            this[funcName] = ::this[funcName];
        }
    }

    update() {
        this.setState({val: this.state.val + 1});
    }

    componentDidMount() {
        this.setTitle(this.props.title);
    }
    setTitle(title) {
        document.title = title;
        return title;
    }
    render() {
        const props = {
            ...this.props,
            ...this.state
        };
        return <ComposedComponent {...props} update={this.update}/>
    }
}

export {Enhance};
