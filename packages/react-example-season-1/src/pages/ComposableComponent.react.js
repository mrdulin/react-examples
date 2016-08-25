import React, {Component, fi} from 'react';
import {findDOMNode} from 'react-dom';
import NumInput from '../components/NumInput.react';

class ComposableComponent extends Component{
    state = {
        val: 0
    }
    render() {
        return <div>
            {/*<NumInput
                ref='numInputInstance'
                type="range"
                val={+this.state.val}
                getElementRef={fn => this.getElementRef = fn}
                update={() => this.update()}
            />*/}

            <NumInput
                type="range"
                val={+this.state.val}
                getElementRef={fn => this.getElementRef = fn}
                update={() => this.update2()}
            />
        </div>
    }

    update() {
        //第一种获取NumInput组件内部input元素引用的方法，input的ref不能用callback形式
        this.setState({val: this.refs.numInputInstance.refs.inp.value});

    }

    update2() {
        //第二种获取NumInput组件内部input元素引用的方法
        const childRefs = this.getElementRef();
        console.log(childRefs);
        this.setState({val: childRefs.inp.value});
    }
}

export default ComposableComponent;
