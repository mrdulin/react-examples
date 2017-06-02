import {Component} from 'react';
import {withRouter} from 'react-router';

class Container extends Component{

  componentWillReceiveProps(nextProps) {
    //路由参数变化，如/detail/:id的id，路由hash后面的查询字符串变化，如/home?from=github&useback=1
    //都会导致组件走componentWillReceiveProps生命周期方法，但是组件不一定会再次render，因为可以通过shouldComponentUpdate进行人为干预
    console.log('componentWillReceiveProps', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const {location} = nextProps;
    if(location.query.name === 'emilie') {
      return false;
    }
    return true;
  }

  transition = () => {
    const {router, location} = this.props;
    router.replace({
      pathname: location.pathname,
      query: {
        name: 'emilie',
        age: 26
      }
    });
  };

  transition1 = () => {
    const {router, location} = this.props;
    router.replace({
      pathname: `${location.pathname}/react`,
    });
  };

  render() {
    console.count('render count');
    return (
      <div>
        <p>获取url上的查询字符串</p>
        <button type='button' onClick={this.transition}>跳转1</button>
        <button type='button' onClick={this.transition1}>跳转2</button>
      </div>
    )
  }
}

export default withRouter(Container);
