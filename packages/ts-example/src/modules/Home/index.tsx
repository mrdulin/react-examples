import * as React from 'react';
import { Link } from 'react-router';

interface IHomeProps {
}

interface IHomeState {

}

class Home extends React.Component<IHomeProps, IHomeState> {
  public constructor(props: IHomeProps) {
    super(props);
  }
  public render(): React.ReactElement<IHomeProps> {
    return (
      <article>
        <ul>
          <li><Link to='/search'>搜索</Link></li>
          <li><Link to='/comp-collection'>UI组件集合</Link></li>
        </ul>
      </article>
    );
  }
}

export default Home;
