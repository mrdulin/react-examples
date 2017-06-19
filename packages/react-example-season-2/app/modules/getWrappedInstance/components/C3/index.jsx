import { connect } from 'react-redux';

class C3 extends React.Component {
  render() {
    return (
      <div>
        C3 component
        <p>{this.props.s1}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    s1: 'react is awesome'
  }
};

export default connect(mapStateToProps)(C3);
export {C3};
