/**
 * Created by dulin on 2017/6/21.
 */
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { string, array, ValidationMap } from 'prop-types';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { SEARCH_HOTWORDS } from '../constants';
import * as Actions from '../actions';

import { IState } from 'reducers';
import beaconLog from 'decorators/beaconLog';
import nonFalsy from 'decorators/nonFalsy';
import log from 'decorators/log';

import PanelHead from 'components/PanelHead';
import { IkeyOfObject } from 'interfaces/common';

interface ISearchHomeProps {
  hotWords: string[];
  historyWords: string[];
}
interface ISearchHomeState {
}
interface ISearchHomeContext {
}

type HotWordClickFunction = (w: string, e: React.MouseEvent<HTMLLIElement>, logData: IkeyOfObject) => void;

const PAGE_ID = 'search_home';

class SearchHome extends React.PureComponent<ISearchHomeProps & RouteComponentProps<any, any>, ISearchHomeState> {

  public static defaultProps: ISearchHomeProps = {
    hotWords: [],
    historyWords: []
  };

  public static propTypes: ValidationMap<ISearchHomeProps> = {
    hotWords: array,
    historyWords: array
  };

  public state: ISearchHomeState = {};

  constructor(props: ISearchHomeProps & RouteComponentProps<any, any>, context?: ISearchHomeContext) {
    super(props, context);
  }

  @beaconLog({
    data: {
      page_id: PAGE_ID,
      evt: 'search_onload'
    },
    method: console.log
  })
  public componentDidMount() {
    this.validateParameters('github.com', 0);
    this.validateParameters('');
  }

  public render(): React.ReactElement<ISearchHomeProps> {
    const { hotWords } = this.props;
    return (
      <article>
        {/*TODO: 重构成组件*/}

        <section>
          <PanelHead title="热门搜索" />
          <ul>
            {
              hotWords.map((word: string, idx: number): React.ReactElement<ISearchHomeProps> => {
                return <li key={idx} onClick={(e) => this.onHotWordClick(word, e, { word })}>{word}</li>;
              })
            }
          </ul>
        </section>

        <section>
          <PanelHead title="历史搜索" />
        </section>
      </article>
    );
  }

  @log()
  @nonFalsy('url', 'data.pet.name')
  public validateParameters(url: string, count?: number): void {

  }

  // @log({
  //   page_id: 'search_home',
  //   evt: 'search_hotword_click'
  // })
  // public test({word = '123123'}) {
  //  
  // }

  // @log({
  //   page_id: 'search_home',
  //   evt: 'search_hotword_click'
  // })
  // private testV2: () => {
  //   // An arrow function on a class is not a method—it's a property
  //   // 类体中的箭头函数并不是类的方法，而是属性，所以装饰器中的descriptor是undefined
  // };

  @beaconLog({
    data: {
      page_id: 'search_home',
      evt: 'search_hotword_click'
    },
    delay: 0,
    method: console.log
  })
  private onHotWordClick(word: string, e: React.MouseEvent<HTMLLIElement>, logData: IkeyOfObject): void {
    const keyword: string = word.trim();
    if (keyword) {
      this.props.router.push({
        pathname: '/search/result',
        query: {
          keyword
        }
      });
    }
  }

}

const mapStateToProps = (state: IState, ownProps: ISearchHomeProps): ISearchHomeProps => {
  return {
    hotWords: SEARCH_HOTWORDS,
    historyWords: []
  };
};

export default connect(
  mapStateToProps,
  {}
)(SearchHome);
