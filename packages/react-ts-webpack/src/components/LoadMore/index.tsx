import * as React from 'react';
import * as style from './style.module.scss';

interface ILoadMoreProps {
  auto?: boolean;
  onLoadMore: (cb: () => void) => void;
  hasMore: boolean;
}

interface ILoadMoreState {
  isLoading: boolean;
}

class LoadMore extends React.PureComponent<ILoadMoreProps, ILoadMoreState> {

  public static defaultProps: ILoadMoreProps = {
    auto: true,
    onLoadMore: () => {
    },
    hasMore: false
  };

  public state = {
    isLoading: false
  };

  private html: HTMLHtmlElement;
  private body: HTMLElement;

  public constructor() {
    super();
    this.onScroll = this.onScroll.bind(this);
  }

  public componentDidMount() {
    this.body = document.body;
    this.html = document.getElementsByTagName('html')[0];

    this.bindEvent(this.props);
  }

  public componentWillReceiveProps(nextProps: ILoadMoreProps) {
    this.bindEvent(nextProps);
  }

  public componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  public render(): React.ReactElement<ILoadMoreProps> {
    const {isLoading}: { isLoading: boolean } = this.state;
    const {hasMore}: { hasMore: boolean } = this.props;

    return (
      <a style={{display: hasMore && this.isBottom ? 'block' : 'none'}} 
        className={style.loadMoreRoot} onClick={this.onLoadMore}>{isLoading ? '加载中...' : '加载更多'}</a>
    );
    
  }

  private bindEvent(props: ILoadMoreProps): void {
    const {hasMore, auto} = props;
    // console.log(hasMore, auto, this.isScrollable);

    if (hasMore && auto && this.isScrollable) {
      window.addEventListener('scroll', this.onScroll, false);
    } else {
      window.removeEventListener('scroll', this.onScroll, false);
    }
  }

  private toggleLoading(isLoading: boolean) {
    this.setState({isLoading});
  }

  private onLoadMore(): void {
    const auto: boolean | undefined = this.props.auto;

    if (!auto || this.state.isLoading) {
      return;
    }

    this.toggleLoading(true);

    this.props.onLoadMore(this.onAfterLoadMore);
  }

  private onAfterLoadMore = (): void => {
    console.log('onAfterLoadMore');
    this.toggleLoading(false);
  }

  get isScrollable(): boolean {
    return this.body.scrollHeight > this.html.clientHeight;
  }

  get isBottom(): boolean {
    if (!this.html) {
      return false;
    }
    return this.html.clientHeight + this.body.scrollTop >= this.body.scrollHeight;
  }

  private onScroll(e: Event): void {
    console.log('isBottom', this.isBottom);
    if (this.isBottom) {
      this.onLoadMore();
    }
  }

}

export default LoadMore;
