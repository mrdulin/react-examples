import React, {Component} from 'react';
import {withRouter} from 'react-router';

export default withRouter(class TransitionToSelf extends Component{
    constructor() {
        super();
        this.state = {items: []}

        for(let i = 0; i < 10; i++) {
            this.state.items.push(i);
        }
    }
    render() {
        const {params} = this.props;
        return <div>
            {params.id === '1' ? <button type='button' onClick={this.handleClick}>跳转自己</button> : <button type='button' onClick={this.handleGoBack}>返回</button>}
            <p>id: {params.id}</p>
            <p>页面没有刷新，但是改变hash，会走componentWillReceiveProps方法</p>

            <ul>
                {
                    this.state.items.map((item, index) => {
                        return <li id={index} key={index}>{item}</li>
                    })
                }
            </ul>
        </div>  
    }

    async componentDidMount() {
        console.log('TransitionToSelf componentDidMount');
        console.log(document.getElementById('99999'));
    }

    async componentWillReceiveProps(nextProps) {
        console.log(nextProps.params.id);
        const xxx = await this.loadxxx();
        const aaa = await this.loadaaa();
    }

    handleGoBack = e => {
        //hashHistory
        const url = 'http://localhost:3002/index.html#/transitionToSelf/1'; //重启应用
        // const url = 'http://localhost:3002/#/transitionToSelf/1'  //不重启应用也不刷新页面（不走生命周期和render方法）

        //browserHistory
        // const url = 'http://localhost:3002/transitionToSelf/1'  //重启应用
        window.location.href = url;
        // window.location.reload();
    }

    handleClick = e => {
        // hashHistory
        const url = 'http://localhost:3002/index.html#/transitionToSelf/123' //重启应用
        // const url = 'http://localhost:3002/#/transitionToSelf/123' //不重启应用也不刷新页面（不走生命周期和render方法）

        //browserHistory
        // const url = 'http://localhost:3002/transitionToSelf/123' //重启应用
        window.location.href = url;
        // window.location.reload();
    }

    
})

// 跳转前                                                          返回                                                             是否重启应用          路由模式
//http://localhost:3002/index.html#/transitionToSelf/1            http://localhost:3002/home.html#/transitionToSelf/123           是                     hashHistory
//http://localhost:3002/index.html#/transitionToSelf/1            http://localhost:3002/index.html#/transitionToSelf/123          否                     hashHistory
//http://localhost:3002/#/transitionToSelf/1                      http://localhost:3002/#/transitionToSelf/123                    否                     hashHistory

//http://localhost:3002/transitionToSelf/1                        http://localhost:3002/transitionToSelf/123                      是                     browserHistory




