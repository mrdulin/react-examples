import React, {Component} from 'react';
import CountDown from '../components/CountDown.react';

class CountDownPage extends Component{
    render() {
        //start 服务器当前时间
        const options = {
            start: new Date('2016/6/16 08:00'),
            end: new Date('2016/6/16 15:00'),
            period: new Date('2016/6/16 15:00').getTime() - new Date('2016/6/16 14:59').getTime()
        }

        return (
            <div>
                <h2>倒计时</h2>
                <CountDown {...options}></CountDown>
            </div>
        );
    }
}

export default CountDownPage;
