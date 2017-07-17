import * as React from 'react';
import { Router, browserHistory, hashHistory, PlainRoute } from 'react-router';
import App from 'modules/App';

const appRoutes: PlainRoute = {
  path: '/',
  component: App,
  indexRoute: {
    component: () => <div>home</div>
  },
  childRoutes: [
    {
      path: 'about', 
      component: () => <div>about</div>
    }
  ]
};

const AppRouter: React.SFC<any> = () => {
  return (
    <Router history={hashHistory} routes={appRoutes}/>
  );
}

export default AppRouter;
