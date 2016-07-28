/**
 * Created by dulin on 16/7/28.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

class ChangeStateTreeRefData extends Component{
    render() {
        let {visibilityFilter, user, usr} = this.props;

        visibilityFilter = 'adfasdfasdfsaf' || visibilityFilter;
        user = {
            name: 'novaline',
            age: 23
        };

        //可以修改state树上对象引用类型内的属性,但不能直接修改引用
        usr.name = 'react';
        //Uncaught TypeError: Cannot assign to read only property 'visibilityFilter' of object '#<Object>'
        // this.props.visibilityFilter = '123123';
        //Uncaught TypeError: Cannot assign to read only property 'usr' of object '#<Object>'
        // this.props.usr = {name: 'webpack'};
        console.log(this.props);


        return <div>
            {visibilityFilter}
            <p>name: {user.name}</p>
            <p>age: {user.age}</p>
            <p>{usr.name}</p>
        </div>
    }
}

export default connect(state => state)(ChangeStateTreeRefData);