// const Pubsub = require('pubsub-js');

React.Component.prototype.setTitle = function (title) {
  document.title = title || 'default title';
}

export default class MyComponent extends React.Component {
  constructor() {
    super();
    this.state = {msg: ''};
  }

  componentWillMount() {
    this.setTitle('React is cool')
    console.log('componentWillMount');
    Pubsub.subscribe('something', (msg, data) => {
      console.log(msg, data);
      this.setState({msg});
    })
  }

  render() {
    return <div>
      <p>在react组件挂载及生命周期体系外部调用某个组件内的方法</p>
      <p>msg: {this.state.msg}</p>
      <button id='test'>测试1</button>
      <button onClick={this.clickHandler}>测试2</button>
    </div>
  }

  clickHandler = e => {
    Pubsub.publish('something', '搞事情');
  }
}

window.setTimeout(() => {

  document.getElementById('test').onclick = e => {
    Pubsub.publish('something', '搞事情');
  }
}, 10)
