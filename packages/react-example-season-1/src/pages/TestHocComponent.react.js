import React, {Component} from 'react';
import WrappedComponent from '../components/WrappedComponent.react';
import {Enhance} from '../components/Enhance.react';


const Button = (props) => <div>
    <button type='button' onClick={props.update}>
        {props.txt} - {props.val}
    </button>
</div>;

const ButtonEnhanced = Enhance({})(Button);

const Label = (props) => <div>
    <label onMouseMove={props.update}>{props.txt} - {props.val}</label>
</div>;

const LabelEnhanced = Enhance({})(Label);

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
                <ButtonEnhanced txt='button' val='0'/>
                <LabelEnhanced txt='label' val='0'/>
                <WrappedComponent />
            </div>
        )
    }
}
//对应Enhance HOC的装饰器写法
export default TestHocComponent;

// export default Enhance({title: 'High-Order-Component'})(TestHocComponent);
