import { withRouter } from 'react-router';

const RouterHOC = ComposedComponent => withRouter(class extends React.Component {
  redirect = (url) => {
    console.log(this.props.router);
    this.props.router.push(url);
  }

  render() {
    return <ComposedComponent redirect={this.redirect} />
  }
})

export default RouterHOC;
