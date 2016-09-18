import React, {Component} from 'react';
import CountDown from '../../common/components/CountDown';


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
            end: new Date(this.state.currentTime + 10000)
        };
        return (
            <div style={{height: '1000px'}}>
                <CountDown {...options}></CountDown>
            </div>
        );
    }
}

export default IOSScrollEvent;
