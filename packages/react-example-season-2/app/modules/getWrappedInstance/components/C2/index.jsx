import { connect } from 'react-redux';

class C2 extends React.Component {
  render() {
    return <div>C2 component</div>
  }
}

export default connect()(C2);
