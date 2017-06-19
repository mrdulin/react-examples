import {PureComponent, PropTypes} from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';
import * as actions from './actions';
console.log(actions);

import SomeComponent from './components/SomeComponent';
import style from './main.module.scss';

//模块作用域，可以在这里声明一些和组件“无关”（可以从视图逻辑中抽象出来的）的常量，方法
//应尽可能的从组件类中抽象出常量和方法，保持组件类中定义的属性和方法尽可能精简，具体见
//React最佳实践系列: https://github.com/mrdulin/mrdulin.github.io/issues/16
const EVALUATE_CLASS_SUFFIX_MAP = new Map([
  [3, {key: 'good', label: '非常满意'}],
  [2, {key: 'general', label: '一般满意'}],
  [1, {key: 'bad', label: '不满意'}],
  [-1, {}]
]);

class Container extends PureComponent{

  //组件默认属性，显示声明组件props上的属性
  static defaultProps = {
    books: {},
    query: '',
    paging: {}
  };

  //组件props类型检查
  static propTypes = {
    books: PropTypes.object,
    query: PropTypes.string,
    paging: PropTypes.object
  };

  //组件state
  state = {};

  //组件实例属性, this._input
  _input = null;

  constructor() {
    super();

    //组件实例属性
    this._isLoading = false;
  }

  get searchValue() {
    return this._input.value.trim();
  }

  get hasMore() {
    const {paging: {hasMore}} = this.props;
    return hasMore;
  }

  //getter
  get params() {
    const {paging: {pageNum}} = this.props;
    const nextPage = pageNum + 1;
    return {
      pageNum: nextPage,
      query: this.searchValue
    };
  }


  onLoadMore = () => {
    if(!this.hasMore) return;
    this.props.getBooksByName(this.params);
  };

  //视图事件处理函数，注意命名方式
  onSearchFormSubmit = e => {
    e.preventDefault();
    const {query} = this.props;
    if(query === this.searchValue) return;
    this.props.clearData().then(() => {
      // this._isLoading = true;
      this.props.getBooksByName(this.params).then(() => {
        //这里不起作用，组件重新渲染先于then
        // this._isLoading = false;
      });
    });
  };


  render() {
    const {books, query, bookIds, isFetching} = this.props;
    return (
      <article>
        <form onSubmit={this.onSearchFormSubmit}>
          <input ref={ref => this._input = ref} type="search" placeholder='输入书名'/>
        </form>
        <SomeComponent/>
        <section>
          <ul>
            {
              bookIds.map((id, idx) => {
                return <li key={idx}>{books[id].Title}</li>
              })
            }
          </ul>
          {
            (bookIds.length && !isFetching) ? (
              this.hasMore ?
              <button type='button' onClick={this.onLoadMore}>加载更多</button> :
              <p>没有更多了</p>
            ) : null
          }
          {
            isFetching ?
            <p>正在卖力搜索中...</p> :
            (query && !bookIds.length && <p>暂无数据</p>)
          }
        </section>
      </article>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {reduxActionsFlowReducers} = state;
  console.log('mapStateToProps ownProps', ownProps);
  return {
    ...reduxActionsFlowReducers
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log('mapDispatchToProps ownProps', ownProps);

  return {
    getBooksByName: (params) => {
      //考虑：可以通过ownProps上的数据和方法的入参(params)，控制action分发流程，而不是在组件的某个方法中控制
      //以下是伪代码
      // if(params.foo === ownProps.bar) {
      //   return dispatch(actions.myfxxkingAsyncAction()).then(() => {
      //     return dispatch(actions.myfxxkingSyncAction2());
      //   }).catch(e => {
      //     return dispatch(actions.myfxxkingSyncErrorHandleAction());
      //   });
      // } else {
      //   dispatch(actions.myfxxkingAsyncAction3());
      // }

      //考虑：如果要通过store上其他一些公用的shareReducer上的数据，例如, 定位数据，这里怎么拿到这些数据？
      //方案一：在该文件模块中，导入store，通过store.getState()来获取
      //方案二：在mapStateToProps中注入公用reducer上的数据，然后通过mapDispatchToProps方法的入参ownProps拿 - 不科学，给组件props注入不必要的reducer，
      //会导致不必要的渲染
      return dispatch(actions.getBooksByName(params));
    },
    clearData: () => {
      //使用了promiseWithStateMiddleware，同步action返回了promise，并且该promise始终resolve，并且resolve的对象是store.getState();
      return dispatch(actions.clearData()).then(store => {
        //这里考虑可以从store上取需要的reducer，此处返回整个store
        return store;
      })
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
