import React, {Component} from 'react';
import {withRouter} from 'react-router';

class CreatePath extends Component{
    render() {
        const path = this.props.router.createPath(location, 'name=novaline');
        return <div>
        </div>
    }
} 

export default withRouter(CreatePath);