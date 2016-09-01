import React, {Component} from 'react';
import {browserHistory} from 'react-router';

//加入这个页面是搜索页面前置页面，点击搜索框或者搜索按钮跳转到搜索页面，然后搜索页面的input在componentDidMount中focus()，可以弹出手机虚拟键盘
//测试机型 Ipod Touch 5 IOS 9.3.4 ，小米4
class Redirect extends Component{
    constructor() {
        super();
        this.handleSearchClick = ::this.handleSearchClick;
    }
    componentDidMount() {
        // this._input.focus();
        // browserHistory.push('/focus');
    }
    render() {
        return <div>
            <button type='button' onClick={this.handleSearchClick}>redirect to input page</button>
        </div>
    }

    handleSearchClick() {
        // react-router路由跳转方式，可以实现
        // browserHistory.push('/focus');
        // location.replace的方式跳转，无法唤起虚拟键盘
        // window.location.replace('/focus');

        
    }
}

export default Redirect;