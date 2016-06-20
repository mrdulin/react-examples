import React, {Component} from 'react';
import CountDown from '../components/CountDown.react';

class CountDownPage extends Component{
    state = {
        isBegin: false
    }
    render() {
        //start 服务器当前时间
        const scope = this;
        const options = {
            start: new Date('2016/6/16 08:59:50'),
            end: new Date('2016/6/16 09:00'),
            period: new Date('2016/6/16 15:00').getTime() - new Date('2016/6/16 14:59').getTime(),
            cb: function() {
                scope.setState({isBegin: true});
            }
        }

        return (
            <div>
                <h2>倒计时</h2>
                <CountDown {...options}></CountDown>
                {this.state.isBegin ? <p>活动开始啦～～～</p> : null}
            </div>
        );
    }
}

export default CountDownPage;
