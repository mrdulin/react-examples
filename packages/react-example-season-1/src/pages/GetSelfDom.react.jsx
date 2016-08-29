import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends Component{
    componentWillMount() {
        console.log('MyComponent will mount');
    }
    componentDidMount() {
        console.log('MyComponent did mount');
    }
    render() {
        console.count('MyComponent render');
        return <div>
            my component
        </div>
    }
}

class GetSelfDom extends Component{
    componentWillMount() {
        console.log('GetSelfDom will mount');
    }
    componentDidMount() {
        console.log('GetSelfDom did mount')
        const el = ReactDOM.findDOMNode(this);
        console.log(el);
        // ReactDOM.render(
        //     <MyComponent />,
        //     document.getElementById('content')
        // )
    }
    render() {
        console.count('GetSelfDom render');
        return <div id='get-self-dom'>
            container component
            <div id='content'>
                <MyComponent />
            </div>
        </div>
    }
}

// console:

//直接添加组件的形式：
//GetSelfDom will mount
//GetSelfDom render: 1
//MyComponent will mount
//MyComponent render: 1
//MyComponent did mount
//GetSelfDom did mount

//通过ReactDOM.render的方式添加子组件:
//GetSelfDom will mount
//GetSelfDom render: 1
//GetSelfDom did mount
//MyComponent will mount
//MyComponent render: 1
//MyComponent did mount

export default GetSelfDom;