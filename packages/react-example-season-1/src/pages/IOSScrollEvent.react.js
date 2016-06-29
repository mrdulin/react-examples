import React, {Component} from 'react';
import CountDown from '../components/CountDown.react';

//使用charles，设置wifi的代理服务器为本机，如10.0.72.211,端口8888，
//在ios的safari浏览器中直接访问http://localhost.charlesproxy.com:8080访问本地项目，本机访问地址是http://localhost:8080
//滚动过程中，没有阻塞JS代码，倒计时依旧执行
class IOSScrollEvent extends Component{
    state = {
        currentTime: new Date().getTime()
    }

    componentDidMount() {

    }

    render() {
        const options = {
            start: new Date(this.state.currentTime),
            end: new Date('2016/06/30')
        };
        return (
            <div style={{height: '1000px'}}>
                <CountDown {...options}></CountDown>
            </div>
        );
    }
}

export default IOSScrollEvent;
