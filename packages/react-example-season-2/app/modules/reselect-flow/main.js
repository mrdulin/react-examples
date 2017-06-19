import {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from './action';
import {getBookNames, getBookByFilter} from './selectors';

const FILTERS = ['SHOW_ALL', 'SHOW_SELL_OUT', 'SHOW_NOT_SELL_OUT'];

class Container extends Component{

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps: ', this.props.books === nextProps.books);
  }

  handleFilterClick(filter) {
    const {actions} = this.props;
    actions.changeFilter(filter);
  }

  render() {
    const {actions, books = [], person} = this.props;
    return (
      <div>
        <h3>reselect 研究</h3>
        <ul>
          {
            FILTERS.map((filter, idx) => <li onClick={() => this.handleFilterClick(filter)} key={idx}>{filter}</li>)
          }
        </ul>
        <button type='button' onClick={() => actions.addPersonInfo()}>ADD PERSON INFO</button>
        <ul>
          {
            books.map((book, idx) => {
              return <li key={idx}>{book.name}</li>
            })
          }
        </ul>
        <p>Her name is {person.name}, age is {person.age}</p>
      </div>
    )
  }
}

function getBookByFilterWithoutSelector(reducer) {
  console.count('getBookByFilterWithoutSelector execute count');
}

function mapStateToProps(state) {
  const {ReselectFlowReducers} = state;

  return {
    booksWithoutSelector: getBookByFilterWithoutSelector(ReselectFlowReducers),
    books: getBookByFilter(state),
    person: ReselectFlowReducers.person
  }
}

function mapDispatchToProps(dispatch) {
  console.log('mapDispatchToProps');
  return {actions: bindActionCreators(actionCreators, dispatch)};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
