import React, {Component} from 'react';

class BaseComponent extends Component{

    static defaultProps = {
        title: 'Learn React By Examples'
    }

    constructor(props) {
        // console.log(props);
        super(props);
    }

    setTitle(title) {
        document.title = title || this.props.title;
        return document.title;
    }
}

export default BaseComponent;
