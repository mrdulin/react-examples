import React, {Component, PropTypes} from 'react';
import {Link, browserHistory, withRouter} from 'react-router';

//react-router 2.4.0以后的版本，提供了withRouter的高阶组件,直接在组件的props上注入了router对象
//但老的this.context用法依旧可以正常使用
//https://github.com/reactjs/react-router/blob/master/upgrade-guides/v2.4.0.md

class ReactRouter03 extends Component{

    constructor(props, context) {
        console.log(super(props, context));
        console.log('props', this.props);
        console.log('context', this.context);
    }

    //ES7的class的静态属性写法
    static contextTypes = {
        router: PropTypes.object
    }

    render() {
        return (
            <div>
                <h2>路由跳转的3种方式</h2>
                <Link to="/table">table</Link>
                <button type="button" onClick={() => {this.transitionTo1()}}>transitionTo1</button>
                <button type="button" onClick={() => {this.transitionTo2()}}>transitionTo2</button>
                <button type="button" onClick={() => {this.transitionTo3()}}>transitionTo3</button>
                <button type="button" onClick={() => {this.transitionTo4()}}>transitionTo4</button>
                <button type="button" onClick={() => {this.transitionTo5()}}>transitionTo5</button>
                <button type="button" onClick={() => {this.transitionTo6()}}>transitionTo6</button>
            </div>
        );
    }

    transitionTo1() {
        browserHistory.push('/table');
    }

    transitionTo2() {
        this.context.router.push('/table');
    }

    transitionTo3() {
        this.context.router.transitionTo('table');
    }

    transitionTo4() {
        //Warning: [react-router] `props.history` and `context.history` are deprecated. Please use `context.router`. http://tiny.cc/router-contextchanges
        // this.props.history.transitionTo('table');
    }

    transitionTo5() {
        // this.props.router.push('table');
        this.props.router.push({path: 'table'});
    }

    transitionTo6() {
        //浏览器history中不记录历史
        this.props.router.replace('table');
    }

}

//ES6的class的静态属性写法
// ReactRouter03.contextTypes = {
//     router: PropTypes.object
// }

export default withRouter(ReactRouter03);
