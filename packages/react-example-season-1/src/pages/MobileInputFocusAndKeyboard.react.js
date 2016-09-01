import React, {Component} from 'react';
const inputStyle = {
    padding: '10px',
    margin: '10px'
}

//测试机型: Ipod Touch5 ios 9.3.2

class MobileInputFocusAndKeyboard extends Component{

    componentDidMount() {
        // alert('componentDidMount');
        // 虚拟键盘不弹出
        this._input.focus();
        // this._input.click();
    }

    render() {
        //autofocus属性，虚拟键盘不弹出
        return <div>
            <input type="text" autofocus style={inputStyle} ref={ref => this._input = ref}/>
            <button type='button' onClick={() => this.handlerClick()}>聚焦</button>
        </div>
    }


    handlerClick() {
        //虚拟键盘弹出
        this._input.focus();
    }
}

export default MobileInputFocusAndKeyboard;
