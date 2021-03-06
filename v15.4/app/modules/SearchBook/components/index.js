import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import IScroll from 'IScroll';

// const fetch = require('imports?self=>{},es6p=es6-promise,Promise=>es6p.Promise!exports?self.fetch!whatwg-fetch');

import {List, ListItem} from 'material-ui/List';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import SearchBar from './SearchBar';
import Wrapper from './Wrapper';
import LoadMore from './LoadMore';
import SearchHistory from './SearchHistory';
import GridListSwitcher from './GridListSwitcher';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import './style';

const API = 'http://it-ebooks-api.info/v1';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    width: window.innerWidth || document.documentElemenet.clientWidth
  }
};

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      isLoading: false,
      page: 1,
      total: 0,
      query: '',
      isSubmitted: false,
      top: 114,
      open: false,
      layout: 'list'
    };

    this._scroller = null;
    this.threshold = 50;
    this.pageSize = 10;

    this._winHeight = window.innerHeight || document.documentElement.clientHeight;
    this._lastScrollTop = 0;
    this._invalidDistance = 10;
  }

  componentDidMount() {
    this._appBar = document.getElementById('appBar');
    this._searchBarHeight = this._searchBarInstance.height;
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.state.isSubmitted && this._scroller) {
      this._scroller.destroy();
      this._scroller = null;
    }
  }

  componentWillUnmount() {
    this._appBar.removeEventListener('transitionend', this._handleAppBarTransitionEnd);
    document.removeEventListener('touchmove', this._preventTouchmoveDefault);
  }

  _initScroller() {
    const supportPassive = util.passiveSupport();
    document.addEventListener('touchmove', this._preventTouchmoveDefault, supportPassive ? {passive: false} : false);
    this._wrapperElement = findDOMNode(this._wrapperRef);
    this._scroller = new IScroll(this._wrapperInstance.wrapperElement, {
      probeType: 2
    });
    this._scroller.threshold = this.threshold;

    this._scroller.on('scrollEnd', this._handleScrollEnd.bind(this, this._scroller));
    this._scroller.on('beforeScrollStart', ::this._blurSearchInput);
    this._scroller.on('scroll', this._toggleFixHeader.bind(this, this._scroller));
    return this._scroller;
  }

  _preventTouchmoveDefault(e) {
    e.preventDefault();
  }

  _blurSearchInput() {
    this._searchBarInstance._blurSearchInput();
  }

  _reachBottom(scroller) {
    const maxScrollY = Math.abs(scroller.maxScrollY);
    const y = Math.abs(scroller.y);
    if (y === 0) return false;
    return maxScrollY - y < scroller.threshold;
  }

  _handleScrollEnd(scroller) {
    if (this.state.isLoading) return;

    if (this._reachBottom(scroller) && this.hasMore) {
      console.log('load more');
      this._loadMore();
    }
  }

  _toggleFixHeader(scroller) {
    const st = Math.abs(scroller.y);

    // console.log(st, this._lastScrollTop);
    this._resetTransition();

    if (st > this._winHeight && (st - this._lastScrollTop) >= this._invalidDistance) {
      let appBarHeight = window.getComputedStyle(this._appBar).getPropertyValue('height');
      this._appBar.style.transform = `translateY(-${appBarHeight})`;
      this._searchBarInstance._toggleFixSearch('add');
      this.setState({top: this._searchBarHeight});
    } else {
      if (this._lastScrollTop - st > this._invalidDistance) {
        this._appBar.style.transform = 'translateY(0px)';
        this._searchBarInstance._toggleFixSearch('remove');
        this.setState({top: 114});
      }
    }
    this._lastScrollTop = st;

  }

  get hasMore() {
    const {page, total} = this.state;
    return page * this.pageSize < total;
  }

  _loadMore() {
    if (this.state.isLoading) return;
    const {query, page} = this.state;
    console.log(page);
    const nextPage = page + 1;

    this.setState({isLoading: true});
    this._fetchData(query, nextPage).then(data => {
      const {books, total, page} = data;
      const newBooks = Array.prototype.concat.apply(this.state.books, books);
      this.setState({
        isLoading: false,
        books: newBooks,
        total,
        page
      }, this._refreshScroller.bind(this, this._scroller));
    }).catch(this._fetchDataFail.bind(this));
  }

  _refreshScroller(scroller) {
    if (!scroller) return;
    setTimeout(() => {
      scroller.refresh();
    }, 100)
  }

  _fetchData(query, page) {
    const url = `${API}/search/${query}/page/${page}`;

    return new Promise((resolve, reject) => {
      fetch(url).then(res => res.json()).then(data => {
        let {Books: books = [], Total: total, Error: error, Page: page = 1} = data;
        const errorNum = Number.parseInt(error, 10);
        total = Number.parseInt(total, 10);
        page = Number.parseInt(page, 10);
        if (errorNum === 0) {
          resolve({books, total, page});
        } else {
          reject({errorNum, msg: '???????????????'});
        }
      }).catch(reject);
    });
  }

  _fetchDataFail(error) {
    this.setState({isLoading: false});
    if (error.errorNum) {
      return console.error(error.msg);
    }
    console.error(error);
  }

  _handleSearchSubmit(e) {
    e.preventDefault();
    if (this.state.isLoading) return;
    const query = e.target.search.value.trim();
    if (!query) return;

    this._blurSearchInput();
    this.setState({
      isLoading: true,
      page: 1,
      books: [],
      query,
    }, () => {
      this._fetchData(query, this.state.page).then(data => {
        const {books, total} = data;
        const historyQuerys = this._getHistoryQuerys();
        if (historyQuerys.indexOf(query) === -1) {
          historyQuerys.push(query);
          localStorage.setItem('historyQuerys', JSON.stringify(historyQuerys));
        }
        this.setState({books, total, isLoading: false, isSubmitted: true}, () => {
          const _scroller = this._initScroller();
          this._refreshScroller.bind(this, _scroller);
        });
      }).catch(this._fetchDataFail.bind(this))
    })

  }

  _handleHistoryClick(query) {
    this.setState({
      isLoading: true,
      page: 1,
      books: [],
      query
    }, () => {
      this._fetchData(query, this.state.page).then(data => {
        const {books, total} = data;
        this.setState({books, total, isLoading: false, isSubmitted: true}, () => {
          const _scroller = this._initScroller();
          this._refreshScroller.bind(this, _scroller);
        });
      }).catch(this._fetchDataFail.bind(this))
    })
  }

  get loadMoreText() {
    if (!this.hasMore) return '';
    return this.state.isLoading ? '????????????' : '????????????';
  }

  _getHistoryQuerys() {
    return JSON.parse(localStorage.getItem('historyQuerys') || '[]');
  }

  _handleQueryChange(e) {
    const query = e.target.value.trim();
    const newState = {query};
    if (!query) {
      newState.isSubmitted = false;
      this._searchBarInstance._toggleFixSearch('remove', true);
      this._appBar.style.transition = 'none';
      this._appBar.style.transform = 'translateY(0px)';
    }
    this.setState(newState);
  }

  _resetTransition() {
    this._appBar.style.removeProperty('transition');
    this._searchBarInstance._recoverTransition();


    this._appBar.style.transition = '.5s ease 0s';
  }

  _handleListItemClick(e) {
    this.setState({open: true});
  }

  _handleClose = () => {
    this.setState({open: false});
  };

  _switchLayout(type) {
    this.setState({layout: type}, () => {
      this._refreshScroller(this._scroller);
      this._scroller.scrollTo(0, 0);
    });

  }

  render() {
    console.count('render count');
    const {books, query, isSubmitted, top, layout} = this.state;

    const items = this._getHistoryQuerys();

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this._handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={this._handleClose}
      />
    ];

    return <div id='iscroll-loadMore'>
      <SearchBar onSubmit={e => this._handleSearchSubmit(e)} ref={c => this._searchBarInstance = c} value={query}
                 onChange={e => this._handleQueryChange(e)}>
        <GridListSwitcher show={isSubmitted} type={layout} onClick={type => this._switchLayout(type)}/>
      </SearchBar>
      <SearchHistory show={!isSubmitted} items={items}
                     onItemClick={text => this._handleHistoryClick(text)}></SearchHistory>
      {isSubmitted ? <Wrapper top={top} ref={c => this._wrapperInstance = c}>
        <div className="scroller">
          {
            layout === 'list' ?
              <List className='book-list'>
                {
                  books.map((book, index) =>
                    <ListItem
                      innerDivStyle={{
                        height: "100px",
                        boxSizing: 'border-box',
                        paddingLeft: '84px',
                        'borderBottom': '1px solid #ddd'
                      }}
                      onTouchTap={(event) => this._handleListItemClick(event)}
                      key={index}
                      primaryText={book.Title}
                      secondaryText={book.SubTitle}
                      leftIcon={<img className='book-thumbnail' src={book.Image} alt='thumbnail'/>}>
                    </ListItem>)
                }
              </List> :
              <div style={styles.root}>
                <GridList
                  cellHeight={180}
                  style={styles.gridList}>
                  {books.map((book, index) => (
                    <GridTile
                      key={book.ID}
                      title={book.Title}
                      subtitle={<span><b>{book.SubTitle}</b></span>}
                      actionIcon={<IconButton><StarBorder color="white"/></IconButton>}>
                      <img style={{}} src={book.Image}/>
                    </GridTile>
                  ))}
                </GridList>
              </div>
          }
          <LoadMore show={this.hasMore} text={this.loadMoreText}></LoadMore>
        </div>
      </Wrapper> : null}
      <Dialog
        title="Dialog With Actions"
        actions={actions}
        modal={false}
        open={this.state.open}
        onRequestClose={this._handleClose}>
        The actions in this window were passed in as an array of React objects.
      </Dialog>
    </div>
  }
}
