import {Component} from 'react';

import C1 from './components/C1';
import C2 from './components/C2';
import C3Connected, {C3} from './components/C3';

export default class Container extends Component {
  state = {
    isEqual: false
  };

  componentDidMount() {
    console.log(this.c2.refs.WrappedComponent);
    console.log(this.c3);
    this.setState({
      isEqual: this.c1.getWrappedInstance() === this.c1.refs.WrappedComponent
    });
  }

  render() {
    return (
      <div>
        <p>获取组件ref</p>
        <hr />
        <C1 ref={ref => this.c1 = ref}/>
        <C2 ref={ref => this.c2 = ref}/>
        <C3 ref={ref => this.c3 = ref}/>
        <C3Connected/>
        <hr />
        <p>this.c1.getWrappedInstance() === this.c1.refs.WrappedComponent</p>
        <p>结果: {this.state.isEqual.toString()}</p>
        <hr />
        <p>如果没有使用{'{withRef: true}'}，调用getWrappedInstance方法会报错:</p>
        <p>Uncaught Error: To access the wrapped instance, you need to specify {'{ withRef: true }'} as the fourth argument of the connect() call.</p>
        <p>this.c2.refs.WrappedComponent的的值是undefined</p>
      </div>
    )
  }
}

