import React, {Component} from 'react';

class domRerenderOrAppendNew extends Component{
    state = {
        datas: []
    }

    componentDidMount(){
        let data;
        this.dataInterval = window.setInterval(() => {
            data = [this.state.datas.length + '.React:' + Math.random() * 2];
            this.setState({datas: this.state.datas.concat(data)});
            console.log(`data is : ${data}`);
        }, 2000);
    }

    componentWillUnmount() {
        this.dataInterval && window.clearInterval(this.dataInterval);
    }

    shouldComponentUpdate(nextProps, nextState) {
        const datas = nextState.datas;
        const newData = datas[datas.length - 1];
        return newData.split(':')[1] > 1;
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.datas.map((data, index) => {
                            return <li key={index}>{data}</li>;
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default domRerenderOrAppendNew;
