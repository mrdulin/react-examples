/**
 * Created by dulin on 2017/6/21.
 */
import * as React from 'react';
import { Router, hashHistory, PlainRoute } from 'react-router';

import App from 'modules/App';
import Home from 'modules/Home';
import About from 'modules/About';
import Contact from 'modules/Contact';
import { CompCollection } from 'modules/CompCollection';

import SearchRoute from 'modules/Search/route';

const appRoutes: PlainRoute = {
  path: '/',
  component: App,
  indexRoute: {
    component: Home
  },
  childRoutes: [
    {
      path: 'about',
      component: About
    },
    {
      path: 'Contact',
      component: Contact
    },
    SearchRoute,
    {
      path: 'comp-collection',
      component: CompCollection
    }
  ]
};

const AppRouter: React.StatelessComponent<any> = (): React.ReactElement<any> => {
  return (
    <Router history={hashHistory} routes={appRoutes} />
  );
};

export default AppRouter;

