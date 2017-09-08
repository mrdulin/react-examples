import {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {action_1, action_2, action_3} from '../../actions';

class SomeComponent extends Component {
  componentDidMount() {
    console.log('SomeComponent', this.props);
    this.props.action_1('react');
    this.props.action_2(new Error('something bad happened'));
    this.props.action_3(Math.random());
  }

  render() {
    const {action1State, action2State} = this.props;
    return (
      <div>
        some component
        <p>action1: {action1State}</p>
        <p>action2: {action2State}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {reduxActionsFlowReducers} = state;
  const {action1State, action2State} = reduxActionsFlowReducers;
  return {
    action1State,
    action2State
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    action_1,
    action_2,
    action_3
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SomeComponent);
