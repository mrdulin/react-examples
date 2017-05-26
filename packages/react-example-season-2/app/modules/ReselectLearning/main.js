import {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from './action';

class Container extends Component{
  render() {
    const {actions, books = []} = this.props;
    return (
      <div>
        <h3>reselect 研究</h3>
        <button type='button' onClick={() => actions.rsAction1()}>action 1</button>
        <button type='button' onClick={() => actions.rsAction2()}>action 2</button>
        <ul>
          {
            books.map((book, idx) => {
              return <li key={idx}>book</li>
            })
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('mapStateToProps', state);
  const {ReselectLearning} = state;
  return {books: ReselectLearning.books};
}

function mapDispatchToProps(dispatch) {
  console.log('mapDispatchToProps');
  return {actions: bindActionCreators(actionCreators, dispatch)};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
