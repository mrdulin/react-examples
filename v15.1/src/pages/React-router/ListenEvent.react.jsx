import React, {Component} from 'react';
import {withRouter} from 'react-router';

class ListenEvent extends Component{
   
    static contextTypes = {
         router: React.PropTypes.object
    }

    componentDidMount() {
         //比较引用
        // console.log('browserHistory', browserHistory);
        // console.log('this.context.router is same as this.props.router', this.context.router === this.props.router); //true
        // console.log('this.context.router is same as browserHistory', this.context.router === browserHistory);   //false
        // console.log('this.context.router.push is same as browserHistory.push', this.context.router.push === browserHistory.push);   //true

        this.props.router.listen(this.routeChange.bind(this));
    }

    componentWillUnmount() {
        //Warning: [history] unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead
        // this.props.router.unregisterTransitionHook(this.routeChange.bind(this))

    }

    routeChange(...arg) {
        console.log('routeChange', arg);
    }

    render() {
        return <div>
            <p>监听路由跳转</p>
        </div>
    }
}

export default withRouter(ListenEvent);