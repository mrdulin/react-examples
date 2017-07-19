import * as React from 'react';
import * as Rx from 'rxjs';
import { Link } from 'react-router';

class Home extends React.PureComponent<any, any> {

  public constructor() {
    super();
  }

  public render() {
    return (
      <section>
        <ul>
          <li><Link to='/search'>autocomplete</Link></li>
          <li><Link to='/idsToResults'>id数组映射为请求结果</Link></li>
        </ul>
      </section>
    );
  }
}

export default Home;
