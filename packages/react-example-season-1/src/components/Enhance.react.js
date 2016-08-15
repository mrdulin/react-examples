import React, {Component, PropTypes} from 'react';

const Enhance = ({title}) => ComposedComponent => class extends Component{

    static defaultProps = {
        title
    }
    constructor() {
        super();
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
        return <ComposedComponent {...props}/>
    }
}

export {Enhance};
