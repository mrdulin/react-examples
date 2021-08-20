/**
 * Created by dulin on 2017/6/29.
 */
import * as React from 'react';
import {Route, IndexRoute, PlainRoute} from 'react-router';

import SearchHome from './Home';
import SearchResult from './Result';
import Search from './main';
import SearchDetail from './Detail';

// const Router: React.SFC<any> = (): React.ReactElement<any> => {
//   return (
//     <Route path="search" component={Search}>
//       <IndexRoute component={SearchHome}/>
//       <Route path="result" component={SearchResult}/>
//     </Route>
//   );
// };

const route: PlainRoute = {
  path: 'search',
  component: Search,
  indexRoute: {
    component: SearchHome
  },
  childRoutes: [
    {
      path: 'result',
      component: SearchResult
    },
    {
      path: 'detail/:id',
      component: SearchDetail
    }
  ]
};

export default route;
