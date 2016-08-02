import React, {Component} from 'react';
import CountDown from '../components/CountDown.react';


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
