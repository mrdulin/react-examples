import * as React from 'react';
import { Router, browserHistory, hashHistory, PlainRoute } from 'react-router';

import App from 'modules/App';
import Home from 'modules/Home';
import Search from 'modules/Search';

const appRoutes: PlainRoute = {
  path: '/',
  component: App,
  indexRoute: {
    component: Home
  },
  childRoutes: [
    {
      path: 'search', 
      component: Search
    }
  ]
};

const AppRouter: React.SFC<any> = () => {
  return (
    <Router history={hashHistory} routes={appRoutes}/>
  );
}

export default AppRouter;
