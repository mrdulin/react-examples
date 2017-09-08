import * as React from 'react';
import { connect } from 'react-redux';
import { IState } from 'reducers';
import { Dispatch } from 'redux';
import * as fetch from 'isomorphic-fetch';
import constants from '../../constants';
import Rolling from '../../components/Rolling';

interface IAboutState {

}


class About extends React.Component<any, IAboutState> {
  public rolling: any;

  public componentDidMount() {
    console.log(this.props);
  }
  public render(): React.ReactElement<any> {
    return (
      <article>
        <h1>This is about page</h1>
        <button type='button' onClick={this.onRequest}>获取正在热映的电影</button>
        <Rolling ref={(ref: any) => this.rolling = ref} />
      </article>
    );
  }

  private onRequest = () => {
    const url: string = `${constants.DOUBAN_API}/movie/in_theaters?city=上海`;

    return fetch(url).then((res: Response) => res.json())
      .then((data: any) => {
        console.log(data);
      });
  }
}

export default About;
