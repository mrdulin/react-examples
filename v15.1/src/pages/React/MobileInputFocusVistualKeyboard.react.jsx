import React, {Component} from 'react';

const inputStyle = {
    padding: '10px',
    margin: '10px'
}

class MobileInputFocusVistualKeyboard extends Component{

    componentDidMount() {
        // this._input.focus();
        // this._input.click();
    }

    render() {
        return <div>
            <p>视图:</p>
            <input type="text" autoFocus style={inputStyle} ref={ref => this._input = ref}/>
            <button type='button' onClick={() => this.handlerClick()}>聚焦</button>
            <hr/>
            <p>测试结果：只要不是新开webview，路由切换后，可以设置input的聚焦唤起虚拟键盘</p>
            <div>
                测试机型:
                <ul>
                    <li>ipod Touch5 ios 9.3.2</li>
                    <li>小米4 android 6.0.1</li>
                </ul> 
            </div>
            <div>
                测试方法：
                <ul>
                    <li>componentDidMount中使用input.focus() - <i>通过</i></li>
                    <li>componentDidMount中使用input.click() - <i>不通过</i></li>
                    <li>在input上设置autoFocus - <i>通过</i></li>
                </ul>
            </div>
        </div>
    }
}

export default MobileInputFocusVistualKeyboard;
