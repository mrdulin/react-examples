const e = React.createElement;

function Text({ children }) {
  React.useMemo(() => {
    console.log('text renders');
  }, [children]);
  return e('p', { children });
}

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return e(Text, { children: 'You liked this.' });
    }

    return e('button', { onClick: () => this.setState({ liked: true }) }, 'Like');
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(e(Button), domContainer);
