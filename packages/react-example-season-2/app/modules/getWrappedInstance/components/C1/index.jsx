import { connect } from 'react-redux';

class C1 extends React.Component {
  render() {
    return <div>C1 component</div>
  }
}

export default connect(null, null, null, { withRef: true })(C1)
