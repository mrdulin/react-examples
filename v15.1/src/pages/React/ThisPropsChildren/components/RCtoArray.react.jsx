import React, {Component} from 'react';

class RCtoArray extends Component {
    render() {
        console.log('this.props.children: ', this.props.children);
        const list = React.Children.toArray(this.props.children);
        console.log('React.Children.toArray(this.props.children): ', list);
        return <div>
            <h3><code>React.Children.toArray</code></h3>
            <p>将children那种复杂的数据结构转换成扁平的数组，并给数组中得每个元素一个唯一的key。</p>
            <p>一般用在渲染前需要给children排序或者分割。</p>
            <p>遍历<code>this.props.children</code>时发生，因为<code>this.props.children</code>的返回值的类型在不同情况下是不一样的，它的类型共有三种情况：</p>
            <ol>
                <li>如果当前组件没有子节点，它就是 undefined；使用<code>React.Children.toArray</code>后为空数组[]</li>
                <li>如果有一个子节点，数据类型是 object；使用<code>React.Children.toArray</code>后为包含一个元素的数组[Object]</li>
                <li>如果有多个子节点，数据类型就是 array。使用<code>React.Children.toArray</code>后为包含多个元素的数组[Object, Object ...]。</li>
            </ol>
        </div>
    }
}

export default RCtoArray;