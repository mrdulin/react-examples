import React, {Component} from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => ({...state.Es6ComponentInheritEs5Component});
const ES5Component = (React.createClass({
    render: function() {
        return null;
    },

    setTitle: function(title) {
        const {dispatch, content} = this.props; 
        document.title = title || '';
    }
}));

class ES6Component extends ES5Component{
    constructor(props, context) {
        super(props, context);
    }
    state = {
        isInheritSuccess: true
    }
    componentDidMount() {
        try {
            this.setTitle('es6写法的组件能否继承es5写法的组件');
        } catch(e) {    
            this.setState({isInheritSuccess: false});
        }
    }
    render() {
        
        return <div>
            <p>测试结果：</p>
            <p>是否继承成功：{this.state.isInheritSuccess ? '继承成功' : '继承失败'}</p>
            <p>connect前, 继承成功，ES5Component是 function (props, context, updater) {'{...}'}</p>
            <p>connect后，继承失败，最后返回的ES5Component是 function Connect(props, context) {'{...}'}</p>
            <p>connect后返回的class已经不是ES5Component的class了</p>
            <p>这是个问题。</p>
        </div>
    }
}

export default ES6Component;

