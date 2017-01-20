/**
 * Created by dulin on 17/1/20.
 */
import React, {Component} from 'react';

export default class extends Component{
    render() {
        const {children} = this.props;
        return <div id="root">
            <h1>Root IndexRoute</h1>
            <div id="container">
                {children}
            </div>
        </div>
    }
}