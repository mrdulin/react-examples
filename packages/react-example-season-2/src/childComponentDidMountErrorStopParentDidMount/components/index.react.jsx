import './style';
import Parent from './parent.react';
import Child from './Child.react';

export default class ChildComponentDidMountErrorStopParentDidMount extends React.Component{
    render() {
        return <div>
            <p>问题：父子组件嵌套，在子组件的componentDidMount中如果有错误，会阻止父组件的componentDidMount，但是在报错的js加个setTimeout，则不会影响父组件的componentDidMount方法执行。</p>

            <Parent>
                <Child></Child>
            </Parent>

            <hr/>
            <p>结论: 成立</p>
            <h3>没有setTimeout的程序流程：</h3>
            <p>child componentDidMount</p>
            <p style={{color: 'red'}}>Uncaught TypeError: this.load is not a function</p>
            <h3>有setTimeout的程序流程：</h3>
            <p>child componentDidMount</p>
            <p>parent componentDidMount</p>
            <p>child componentDidMount setTimeout</p>
            <p style={{color: 'red'}}>Uncaught TypeError: _this2.load is not a function</p>
        </div>
    }
}   