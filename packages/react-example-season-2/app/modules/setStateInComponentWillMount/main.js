import {Component} from 'react';

export default class MainComponent extends Component{
  state = {
    name: ''
  }
  componentWillMount() {
    this.setState({name: 'emilie'}, () => {
      console.log(this.state.name);
    });
  }
  render() {
    console.count('render count');

    return (
      <div>
        <p>setState in componentWillMount</p>
      </div>
    )
  }
}
