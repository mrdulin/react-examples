import React, {Component} from 'react';

class FunctionBind extends Component{
    componentDidMount() {
        const {filter, map} = Array.prototype;
        var el = document.querySelectorAll('p')::filter(el => {
            return el.id !== 'fucking-SB';
        })::map(p => p.style.cssText = 'background-color: blue; color: #fff');
    }
    render() {
        return <div className='fn-bind-container'>
            <p id='fucking-SB'></p>
            <p>fucking SB hard</p>
            <p>If you don't know, shut your fucking mouth up!</p>
        </div>
    }
}

export default FunctionBind;
