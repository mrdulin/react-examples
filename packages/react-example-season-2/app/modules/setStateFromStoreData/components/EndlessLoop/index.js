import {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../../action';


@connect(state => {
  return {
    person: state.setStateFromStoreData
  }
}, dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
}))
class EndlessLoop extends Component{
  state = {
    person: {
      name: 'zxm',
      desc: 'sb'
    },
    foo: 'bar'
  };

  componentWillReceiveProps(nextProps) {
    const {actions} = this.props;
    const {person} = nextProps;
    if(person.name === 'novaline') {
      this.setState({foo: 'yk is sb too'}, () => {
        // 死循环注释 - -
        // actions.addInfo();
      });
    }
  }

  handleClick = e => {
    const {actions} = this.props;
    actions.addInfo();
  };

  render() {

    console.count('EndlessLoop render count');

    return (
      <div>
        <h2>redux和组件setState可能会造成组件死循环渲染</h2>
        <button type='button' onClick={this.handleClick}>死循环按钮</button>
        <p>{this.state.foo}</p>
      </div>
    )
  }
}

export default EndlessLoop;
