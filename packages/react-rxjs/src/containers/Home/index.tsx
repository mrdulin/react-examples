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
          <li><Link to='/search'>search</Link></li>
          <li><Link to='/bookList'>bookList</Link></li>
        </ul>
      </section>
    );
  }
}

export default Home;
