import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class ChildComponent extends Component{
    componentWillMount() {
        console.log('ChildComponent will mount');
    }
    componentDidMount() {
        console.log('ChildComponent did mount');
    }
    render() {
        console.count('ChildComponent render');
        return <div>
            child component
        </div>
    }

    say() {
       alert('What the hell?'); 
    }
}

class ParentComponent extends Component{
    componentWillMount() {
        console.log('ParentComponent will mount');
    }
    componentDidMount() {
        console.log('ParentComponent did mount')
        // const el = ReactDOM.findDOMNode(this);
        // console.log(el);
        const ChildComponentIns = ReactDOM.render(
            <ChildComponent />,
            document.getElementById('content')
        )

        ChildComponentIns.say();
    }
    render() {
        console.count('ParentComponent render');
        return <div id='parent-component'>
            parent component
            <div id='content'>
                {/*<ChildComponent />*/}
            </div>
        </div>
    }
}

// console:

//直接添加组件的形式：
//ParentComponent will mount
//ParentComponent render: 1
//ChildComponent will mount
//ChildComponent render: 1
//ChildComponent did mount
//ParentComponent did mount

//通过ReactDOM.render的方式添加子组件:
//ParentComponent will mount
//ParentComponent render: 1
//ParentComponent did mount
//ChildComponent will mount
//ChildComponent render: 1
//ChildComponent did mount

export default ParentComponent;