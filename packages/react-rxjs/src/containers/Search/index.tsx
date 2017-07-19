import * as React from 'react';
import { connect } from 'react-redux';
import { searchWikipedia, clearWikipedia } from '../../actions/wikipedia';
import * as Rx from 'rxjs';

interface IProps {
  wikipedia: any[]
}

interface IActions {
  searchWikipedia: (q: string) => void;
  clearWikipedia: () => void;
}

type Props = IProps & IActions;

class Search extends React.PureComponent<Props, any> {

  public static defaultProps: IProps = {
    wikipedia: []
  }

  private input: Rx.Subject<React.FormEvent<any>>;

  public constructor(props: Props) {
    super(props);
    this.input = new Rx.Subject();

    this.input
      // 事件和值的映射
      .map((e: any) => e.target.value.trim())
      // 使用onInputChangeObserver订阅该Observable
      .subscribe(this.onInputChangeObserver);
  }

  public render() {
    const { wikipedia }: { wikipedia: any[] } = this.props;
    console.count('Search render count');
    return (
      <section>
        <form>
          <input type="text" onChange={this.onInputChange} autoComplete="off" />
          <button type='button' onClick={this.onClearClick}>clear</button>
        </form>
        <section>
          <ul>
            {
              wikipedia.map((item: any, idx: number) => {
                return (
                  <li key={idx}>
                    <a href={item.domain}>{item.name}</a>
                  </li>
                );
              })
            }
          </ul>
        </section>
      </section>
    );
  }

  private onClearClick = () => {
    this.props.clearWikipedia();
  }

  private onInputChange = (e: React.FormEvent<any>) => {
    e.persist();
    this.input.next(e);
  }

  private onInputChangeObserver = (x: string) => {
    this.props.searchWikipedia(x);
  }
}

export default connect(
  ({ wikipedia }) => ({ wikipedia }),
  { searchWikipedia, clearWikipedia }
)(Search);
