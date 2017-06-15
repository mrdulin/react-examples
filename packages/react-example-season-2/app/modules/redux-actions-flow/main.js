import {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';
import * as actions from './actions';

//模块作用域，可以在这里声明一些和组件“无关”（可以从视图逻辑中抽象出来的）的常量，方法
//应尽可能的从组件类中抽象出常量和方法，保持组件类中定义的属性和方法尽可能精简，具体见
//React最佳实践系列: https://github.com/mrdulin/mrdulin.github.io/issues/16
const EVALUATE_CLASS_SUFFIX_MAP = new Map([
  [3, {key: 'good', label: '非常满意'}],
  [2, {key: 'general', label: '一般满意'}],
  [1, {key: 'bad', label: '不满意'}],
  [-1, {}]
]);

class Container extends Component{

  //组件默认属性，显示声明组件props上的属性
  static defaultProps = {
    books: [],
    query: '',
    paging: {}
  };

  //组件props类型检查
  static propTypes = {
    books: PropTypes.array,
    query: PropTypes.string,
    paging: PropTypes.object
  };

  //组件state
  state = {};

  //组件实例属性, this._input
  _input = null

  constructor() {
    super();

    //组件实例属性
    this._isLoading = false;
  }

  componentDidMount() {

  }

  //getter
  get params() {
    const {paging: {pageNum}} = this.props;
    const query = this._input.value.trim();
    const nextPage = pageNum + 1;
    return {
      pageNum: nextPage,
      query
    };
  }

  // onSearchInputChange = e => {
  //   const query = e.target.value.trim();

  // };

  onSearchFormSubmit = e => {
    e.preventDefault();
    this.props.getBooksByName(this.params);
  };

  render() {
    const {books, query} = this.props;
    return (
      <article>
        <form onSubmit={this.onSearchFormSubmit}>
          <input ref={ref => this._input = ref} type="search" placeholder='输入书名'/>
        </form>
        <section>
          <ul>
            {
              books.map((book, idx) => {
                return <li key={idx}>{book.Title}</li>
              })
            }
          </ul>
        </section>
      </article>
    )
  }
}

const mapStateToProps = (state) => {
  const {reduxActionsFlowReducers} = state;
  return {
    ...reduxActionsFlowReducers
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getBooksByName: (params) => {
      dispatch(actions.getBooksByName(params));
    },
    clearData: () => {
      dispatch(actions.clearData());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
