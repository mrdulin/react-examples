import React, {Component} from 'react';
import RCcount from './components/RCcount.react';
import RConly from './components/RConly.react';
import RCmap from './components/RCmap.react';
import RCtoArray from './components/RCtoArray.react';

class ThisPropsChildren extends Component{

    render() {
        return <div>
            <RCcount>
                <p>有几个根元素(组件的直接子元素)，<code>React.Children.count(this.props.children)</code>的个数就为几个。</p>
                <p>如此例，RCcount组件包含两个p元素，是组件的直接子元素，<code>React.Children.count(this.props.children)</code>的个数为2。</p>
            </RCcount>
            <RConly>
                <p>I'm RConly component's only child</p>
            </RConly>
            <RCmap>
                <p><code>React.Children.map</code>和<code>this.props.children.map</code>的区别是, 如果children只有一个元素, <code>React.Children.map</code>会将其放在一个数组中再调用map方法，避免调用map时报错。</p>
                <p>而<code>this.props.children</code>, 如果只有一个元素, children不是数组,调用map方法会报错。</p>
            </RCmap>
            <RCtoArray>
                <p></p>
            </RCtoArray>
        </div>
    }
}

export default ThisPropsChildren;
