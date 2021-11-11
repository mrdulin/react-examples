import update from 'immutability-helper';
import {connect} from 'react-redux';
import * as Actions from './action';

class Child2 extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.data === this.props.data) {
      return false;
    }
    return true;
  }

  render() {
    console.count('Child2 render');
    return (
      <div>
        child2
        {JSON.stringify(this.props.data)}
      </div>
    )
  }
}

class Child1 extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.data === this.props.data) {
      return false;
    }
    return true;
  }

  render() {
    console.count('Child1 render');
    return (
      <div>
        child1
        <Child2 data={this.props.data.lv2}/>
      </div>
    )
  }
}

class Parent extends React.Component {
  state = {
    root: {
      lv1: {
        lv2: [1, 2, 3]
      }
    }
  }

  render() {
    console.count('Parent render');
    const {data} = this.props;

    return (
      <div>
        parent
        <Child1 data={data.root.lv1}/>
        <button onClick={this.handleClick}>修改数据</button>
      </div>
    )
  }

  handleClick = () => {

    //1.
    // const {root} = this.state;
    // let {lv2} = root.lv1;

    //false false false false
    // const newLv2 = [...lv2];
    // newLv2.push(5,5,5);
    // const newRoot = update(root, {
    //     lv1: {
    //         lv2: {$set: newLv2}
    //     }
    // });
    // const newState = {root: newRoot};


    //2.
    // const newState = {root: this.state.root};
    // this.state.root.lv1.lv2 = [];
    // newState.root.lv1.lv2 = [4,5,6];


    // console.log(this.state === newState);
    // console.log(this.state.root === newState.root);
    // console.log(this.state.root.lv1 === newState.root.lv1);
    // console.log(this.state.root.lv1.lv2 === newState.root.lv1.lv2);

    // this.setState(newState);


    //3.
    this.props.dispatch(Actions.changeData());

  }
}

export default connect(state => ({
  data: state.DataRef
}))(Parent);
