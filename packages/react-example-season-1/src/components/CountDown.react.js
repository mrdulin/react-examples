import React, {Component} from 'react';

class CountDown extends Component{

    constructor(props) {
        super(props);
        this.state = {
            //服务器时间基准
            start: Date.parse(new Date()),
            //以服务器时间为基准的时间，随着倒计时，每次加1秒
            now: new Date()
        }

    }

    componentWillMount() {
        this.props.start && this.setState({
            start: Date.parse(this.props.start),
            now: this.props.start
        });
    }

    componentDidMount() {
        const scope = this;
        this.interval = window.setInterval(() => {
            scope.setState({
                now: new Date(scope.state.now.getTime() + 1000),
            });
        }, 1000);
    }

    _clearInterval() {
        this.interval && window.clearInterval(this.interval);
    }

    componentWillUnmount() {
        this._clearInterval();
    }

    /**
     * 倒计时函数
     *
     * 1.距离秒杀开始倒计时： [开始时间点] = 系统时间， [结束时间点] = 秒杀开始时间点
     *
     * 2.距离本场结束倒计时： 举例，秒杀开始时间是10点，当前系统时间是11点，秒杀结束时间是11点30分，下一场秒杀开始时间是12点
     *
     * [开始时间点] ＝ 系统时间， ［结束时间点］＝ 秒杀结束时间点
     *
     * @param  {Date} endtime 倒计时结束时间点，以当前系统时间点为开始时间点
     * @param  {int} period 倒计时结束还剩多少时间（毫秒），以当前系统时间点为开始时间点
     * @return {Object} 返回天，时，分，秒，毫秒组成的对象
     */
    getTimeRemaining(endtime, period) {
        // const nowSys = Date.parse(new Date());
        const end = endtime ? Date.parse(endtime) : (() => {
            return this.state.start + period;
        })();
        const t = end - this.state.now;
        const seconds = Math.floor( (t/1000) % 60 );
        const minutes = Math.floor( (t/1000/60) % 60 );
        const hours = Math.floor( (t/(1000*60*60)) % 24 );
        const days = Math.floor( t/(1000*60*60*24) );
        const newArr = [seconds, minutes, hours, days].map((el) => {
            if(el < 10) {
                el = '0' + el;
                return el;
            }
            return el + '';
        });
        return {
            total: t,
            seconds: newArr[0],
            minutes: newArr[1],
            hours: newArr[2],
            days: newArr[3]
        };
    }

    render() {
        // const countDown = this.state.countDown;
        let countDown = this.getTimeRemaining(this.props.end);

        console.count();

        const style = {
            container: {
                display: 'inline-block',
                marginLeft: '7px',
                verticalAlign: 'center'
            },
            countCell: {
                backgroundColor: '#000',
                width: '30px',
                height: '23px',
                color: '#fff',
                display: 'inline-block',
                textAlign: 'center',
                lineHeight: '23px',
                fontSize: '16px',
                fontFamily: 'SF UI Display',
                fontWeight: 'bold'
            },
            colon: {
                display: 'inline-block',
                width: '10px',
                textAlign: 'center'
            }
        }
        return (
            <div style={style.container} id="countDown">
                <span style={style.countCell}>{countDown.hours}</span>
                <span style={style.colon}>:</span>
                <span style={style.countCell}>{countDown.minutes}</span>
                <span style={style.colon}>:</span>
                <span style={style.countCell}>{countDown.seconds}</span>
            </div>
        );
    }

};

export default CountDown;
