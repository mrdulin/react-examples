import React, {Component} from 'react';
import TestReactChildrenMethod from '../components/TestReactChildrenMethod.react';

class ReactChildren extends Component{

    renderTest1() {
        return <TestReactChildrenMethod>

            {/*有几个根元素(组件的直接子元素)，this.props.children的个数就为几个，下面两个p元素，是组件的直接子元素，this.props.children的个数为2*/}
            {/*<p>测试React.Children上的方法</p>*/}
            {/*<p>美味你的健康生活</p>*/}
            <div></div>
        </TestReactChildrenMethod>
    }

    renderTest2() {
        return <TestReactChildrenMethod>
            <p>angular</p>
            {/*
                <p>jquery</p>
            <p>react</p>
                
                */}
        </TestReactChildrenMethod>
    }
    render() {
        return <div>
            {/*this.renderTest1()*/}
            {this.renderTest2()}
        </div>
    }
}

export default ReactChildren;
