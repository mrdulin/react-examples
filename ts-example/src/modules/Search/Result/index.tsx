import * as React from 'react';
import {connect} from 'react-redux';
import {RouteComponentProps} from 'react-router';
import {ActionMeta} from 'redux-actions';
import {Query} from 'history';
import {Dispatch} from 'redux';
import {ValidationMap, arrayOf, object, string} from 'prop-types';
import {IState} from 'reducers';
import * as Actions from '../actions';
import {ISearchReducerState, ISearchActions, ISearchEntity, ISearchParams} from '../interfaces';
import {IPaging, IonInit} from 'interfaces/common';

import Book from 'models/Book';

import List from 'components/List/SearchList';
import LoadMore from 'components/LoadMore';

interface ISearchResultProps<T> {
  items: T[];
  paging: IPaging;
  query: string;
}

interface ISearchResultState {
  
}

type onListItemClick = (item: Book, idx?: number) => void;
type SearchResultProps<T> = ISearchResultProps<T> & ISearchActions & RouteComponentProps<any, any>;

class SearchResult extends React.PureComponent<SearchResultProps<Book>, ISearchResultState> implements IonInit {

  public static defaultProps: ISearchResultProps<Book> = {
    items: [],
    paging: {
      page: 0,
      pageSize: 10,
      total: -1,
      hasMore: true
    },
    query: ''
  };

  public static propTypes: ValidationMap<ISearchResultProps<Book>> = {
    items: arrayOf(object),
    paging: object,
    query: string
  };

  public keyword: string;

  public constructor(props: SearchResultProps<Book>) {
    super(props);
    const query: Query = props.location.query;
    this.keyword = query.keyword;


    const keyword: string = props.query;
    if (keyword !== this.keyword) {
      this.onInit();
    }
  }

  public componentWillReceiveProps(nextProps: SearchResultProps<Book>) {
    if (this.keyword && (nextProps.location.query.keyword !== this.keyword)) {
      this.keyword = nextProps.location.query.keyword;
      (this.props.onClear() as any).then(() => {
        this.onSearch();
      });
    }
  }

  public onInit(): void {
    this.onSearch();
  }

  public render(): React.ReactElement<ISearchResultProps<Book>> {
    const {items, paging}: { items: Book[], paging: IPaging } = this.props;

    return (
      <section>
        {
          paging.total === 0 ?
            <p>暂无结果</p> :
            <div>
              <List items={items} onClick={this.onListItemClick}/>
              <LoadMore hasMore={paging.hasMore} onLoadMore={this.onSearch}/>  
            </div>
        }
      </section>
    );
  }

  private onSearch = (loadMoreCallback?: () => void): void => {
    const {paging} = this.props;
    if (paging.hasMore) {
      const nextPage: number = paging.page + 1;
      this.props.onSearch(this.keyword, nextPage)
        .then(({value, action}: { value: ISearchEntity<Book>, action: ActionMeta<ISearchEntity<Book>, ISearchParams> }) => {
          console.log(value, action);
          if (loadMoreCallback) {
            loadMoreCallback();
          }
        });
    }
  }

  private onListItemClick: onListItemClick = (item: Book, idx?: number): void => {
    this.props.router.push(`/search/detail/${item.id}`);
  }

}

const mapStateToProps = (state: IState): ISearchResultProps<Book> => {
  const {search}: { search: ISearchReducerState<Book> } = state;

  const {items, paging, query} = search;
  
  return {
    items,
    paging,
    query
  };
};

const mapDispatchToProps = (dispatch: Dispatch<IState>, ownProps: SearchResultProps<Book>): ISearchActions => {
  return {
    onSearch: (query: string, page: number): any => {
      return dispatch(Actions.search({query, page}));
    },
    onClear: (): any => {
      return dispatch(Actions.clear());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResult);
