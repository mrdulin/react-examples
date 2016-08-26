import React, {Component} from 'react';

class FunctionBind extends Component{

    constructor() {
        super();
        this.method4 = this.method4.bind(this);
    }
    componentDidMount() {
        const {filter, map} = Array.prototype;
        var el = document.querySelectorAll('p')::filter(el => {
            return el.id !== 'fucking-SB';
        })::map(p => p.style.cssText = 'background-color: blue; color: #fff');
    }

    method1 = () => {
        console.log('method1', this);   //'method1' FunctionBind
    }

    method2() {
        console.log('method2', this);  //'method2' null
    }

    method3() {
        console.log('method3', this);   //'method3' FunctionBind
    }

    method4() {
        console.log('method4', this);   //'method4' FunctionBind
    }

    render() {
        return <div className='fn-bind-container'>
            <p id='fucking-SB'></p>
            <p>fucking SB hard</p>
            <p>If you don't know, shut your fucking mouth up!</p>
            <button onClick={this.method1}>call method1</button>
            <button onClick={this.method2}>call method2</button>
            <button onClick={() => this.method3()}>call method3</button>
            <button onClick={this.method4}>call method4</button>
        </div>
    }
}

export default FunctionBind;
