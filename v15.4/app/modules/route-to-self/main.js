import React, {Component} from 'react';
import {withRouter} from 'react-router';

export default withRouter(class Container extends Component {
  constructor() {
    super();
    this.state = {items: []}

    for (let i = 0; i < 10; i++) {
      this.state.items.push(i);
    }
  }

  render() {
    const {params} = this.props;
    return <div>
      {params.id === '1' ? <button type='button' onClick={this.handleClick}>跳转自己</button> :
        <button type='button' onClick={this.handleGoBack}>返回</button>}
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

  componentDidMount() {
    console.log('route-to-self componentDidMount');
    console.log(document.getElementById('99999'));
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.params.id);
  }

  handleGoBack = e => {
    //hashHistory
    // const url = 'http://localhost:3002/index.html#/route-to-self/1'; //重启应用
    // const url = 'http://localhost:3002/#/route-to-self/1'  //不重启应用也不刷新页面（不走生命周期和render方法）

    //browserHistory
    // const url = '//localhost:3002/route-to-self/1'  //重启应用
    // window.location.href = url;

    // window.location.reload();
  }

  handleClick = e => {
    // hashHistory
    // const url = 'http://localhost:3002/index.html#/route-to-self/123' //重启应用
    // const url = 'http://localhost:3002/#/route-to-self/123' //不重启应用也不刷新页面（不走生命周期和render方法）

    //browserHistory
    // const url = '//localhost:3002/route-to-self/123' //重启应用
    // window.location.href = url;
    this.props.router.replace('/route-to-self/321');

    //对于html5的路由，不支持下面这种路由跳转
    // window.location.hash = '#/route-to-self/123';
    // window.location.reload();
  }


})

// 跳转前                                                          返回                                                             是否重启应用          路由模式
//http://localhost:3002/index.html#/route-to-self/1            http://localhost:3002/home.html#/route-to-self/123           是                     hashHistory
//http://localhost:3002/index.html#/route-to-self/1            http://localhost:3002/index.html#/route-to-self/123          否                     hashHistory
//http://localhost:3002/#/route-to-self/1                      http://localhost:3002/#/route-to-self/123                    否                     hashHistory

//http://localhost:3002/route-to-self/1                        http://localhost:3002/route-to-self/123                      是                     browserHistory




