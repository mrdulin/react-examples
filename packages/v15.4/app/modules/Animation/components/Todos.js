import RaisedButton from 'material-ui/RaisedButton';

export default class Animation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['hello', 'world', 'click', 'me'],
      enableTransitionLeave: true
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    const newItems = this.state.items.concat([
      prompt('Enter some text')
    ]);
    this.setState({items: newItems});
  }

  handleRemove(i) {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({items: newItems});
  }

  toggleTransitionLeave() {
    this.setState({enableTransitionLeave: !this.state.enableTransitionLeave});
  }

  render() {
    const {enableTransitionLeave} = this.state;
    const items = this.state.items.map((item, i) => (
      <div key={item} onClick={() => this.handleRemove(i) }>
        {item}
      </div>
    ));

    return (
      <div>
        <RaisedButton label='Add Item' onClick={this.handleAdd}/>&nbsp;
        <RaisedButton label='toggleTransitionLeave' onClick={::this.toggleTransitionLeave}/>
        <p>transitionLeave开启状态：{enableTransitionLeave ? '开启' : '关闭'}</p>
        {/*默认的, 如果不设置transitionEnter和transitionLeave属性，这两个属性的默认值是true */}
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionLeave={enableTransitionLeave}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {items}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
