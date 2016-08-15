import React, {Component, fi} from 'react';
import {findDOMNode} from 'react-dom';
import NumInput from '../components/NumInput.react';

class ComposableComponent extends Component{
    state = {
        val: 0
    }
    render() {
        return <div>
            <NumInput
                ref={ref => this.numInputInstance = ref}
                type="range"
                val={+this.state.val}
                getElementRef={fn => this.getElementRef = fn}
                update={() => this.update()}
            />
        </div>
    }

    update() {
        //第二种获取NumInput组件内部input元素引用的方法
        const childRefs = this.getElementRef();
        console.log(childRefs);
        //第一种获取NumInput组件内部input元素引用的方法，input的ref不能用callback形式
        // this.setState({val: this.numInputInstance.refs.inp.value});

        this.setState({val: childRefs.inp.value});
    }
}

export default ComposableComponent;
