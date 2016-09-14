import React, {Component} from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => ({...state.Es6ComponentInheritEs5Component});
const ES5Component = connect(
    mapStateToProps
)(React.createClass({
    render: function() {
        return null;
    },

    setTitle: function(title) {
        const {dispatch, content} = this.props; 
        document.title = title || '';
    }
}));

//connect 后，继承失败
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
            ES6Component
            <p>是否继承成功：{this.state.isInheritSuccess ? '继承成功' : '继承失败'}</p>
        </div>
    }
}

export default ES6Component;

