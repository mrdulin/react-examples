import Child from './child';

export default class extends React.Component {
  componentDidMount() {
    console.log('parent componentDidMount');
    const p = ReactDOM.findDOMNode(this._p);
    p.style.color = 'green';
  }

  render() {
    console.count('parent render');
    return <div className='parent'>
      <p ref={ref => this._p = ref}>parent component</p>
      this.props.children
    </div>
  }
}
