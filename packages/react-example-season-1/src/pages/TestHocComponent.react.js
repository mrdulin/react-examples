import React, {Component} from 'react';
import WrappedComponent from '../components/WrappedComponent.react';
import {Enhance} from '../components/Enhance.react';


//或者装饰器写法
//需要babel-plugin-transform-decorators-legacy插件支持
@Enhance({title: 'High-Order-Component'})
class TestHocComponent extends Component{
    componentDidMount() {
        // console.log(this)
        // console.log(this.props)
        // console.log(this.state);
    }
    render() {
        return (
            <div>
                <p>current title is {this.props.title}</p>
                <WrappedComponent />
            </div>
        )
    }
}
//对应Enhance HOC的装饰器写法
export default TestHocComponent;

// export default Enhance({title: 'High-Order-Component'})(TestHocComponent);
