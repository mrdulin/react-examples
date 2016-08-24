import React, {Component} from 'react';
 

class childComponent extends Component{
    render() {
        return <div>
            child component
        </div>
    }

    method1() {
        alert('child component method1');
    }

    method2() {
        alert('child component method2');
    }
}

class callChildComponentMethod extends Component{

    componentDidMount() {
        //拿到的是子组件的类的实例
        // console.dir(this._childComponentInstance);
        //下面这样是调用不到子组件方法的
        // this._childComponentInstance.method1();
        // this._childComponentInstance.method2();

        console.dir(this.refs.child);
        
    }
    render() {
        return <div>
            parent component
            {/*<childComponent ref={ref => this._childComponentInstance = ref}></childComponent>*/}
            <childComponent ref='child'></childComponent>
        </div>
    }
}

export default callChildComponentMethod;