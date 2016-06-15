import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as Actions from '../actions/reactRedux02';

class ReactRedux02 extends Component{

    render() {
        //组件的props上有被注入的action creator（getUser和deleteUser），以后直接调用即可
        //此时，props将没有被注入dispatch方法
        const {user, other, getUser, deleteUser} = this.props;
        return (
            <div>
                <p>React redux 02 for testing inject state and action creators</p>
                <p>username: {user.name}</p>
                <p>age: {user.age}</p>
                <p>other: {other}</p>
                <button type='button' onClick={() => getUser()}>获取user</button>
                <button type='button' onClick={() => deleteUser()}>删除user</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {user, other} =  state.reactRedux02;
    return {user, other};
};

//向组件的props注入reduxRedux2的所有action creators
export default connect(
    mapStateToProps,
    Actions
)(ReactRedux02);
