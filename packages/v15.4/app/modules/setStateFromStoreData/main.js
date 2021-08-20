import {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from './action';

import EndlessLoop from './components/EndlessLoop';

//不赞成从redux的store上拿数据再setState到组件的state上，会导致数据流很乱，尤其涉及到组件生命周期后，更是难以管理数据
//因为有同事这么用，遇到了一个问题，这里只做演示

@connect(state => {
  const {setStateFromStoreData} = state;
  return {person: setStateFromStoreData};
}, dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
}))
class Container extends Component {
  state = {
    person: {
      name: 'emilie',
      age: 26,
      sex: 'female'
    }
  };

  componentWillReceiveProps(nextProps) {
    const {person} = nextProps;
    if (person) {
      console.log('componentWillReceiveProps this.state.person', this.state.person);
      console.log('componentWillReceiveProps nextProps.person', person);
      this.setState({person});
    }
  }

  handleButtonClick = e => {
    const {actions} = this.props;

    /**
     * 这里dispatch一个action后，会触发component的componentWillReceiveProps生命周期方法，然后通过nextProps获取到react-redux注入到
     * component props上的数据(person)，然后通过setState方法放到component的state上
     *
     * 这里setState是本意是想清空person中的数据，但是在setState前，又dispatch了一个action，
     * reducer返回了注入到组件state的新的引用，触发了componentWillReceiveProps方法
     *
     * 导致在setState的第二个参数callback中通过this.state.person拿到的数据依旧存在（因为在componentWillReceiveProps重新setState了）
     *
     * React会对组件生命周期和组件的react事件处理函数中的setState进行合并后（队列），再一次性setState
     *
     */
    actions.addInfo();
    this.setState({
      person: {}
    }, () => {
      console.log('handleButtonClick this.props.person', this.props.person);
      console.log('handleButtonClick setState callback this.state.person: ', this.state.person);
    })
  };

  render() {
    return (
      <div>
        <button type='button' onClick={this.handleButtonClick}>按钮</button>
        <EndlessLoop/>
      </div>
    )
  }
}

export default Container;
