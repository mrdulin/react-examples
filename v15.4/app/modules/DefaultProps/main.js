import MyComponent from './components/MyComponent';

export default class extends React.PureComponent {
  handleButtonClick = (title) => {
    alert(title);
  }

  render() {
    return (
      <div>
        <MyComponent title='组件默认属性' onButtonClick={this.handleButtonClick}/>
      </div>
    )
  }
}
