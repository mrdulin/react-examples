import * as React from 'react';
import { Router, browserHistory, hashHistory, PlainRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import store from './configureStore';

const history = syncHistoryWithStore(hashHistory, store);

import App from './containers/App';
import Home from './containers/Home';
import Search from './containers/Search';
import BookList from './containers/BookList';

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
    },
    {
      path: 'bookList',
      component: BookList
    }
  ]
};

const AppRouter: React.SFC<any> = () => {
  return (
    <Router history={history} routes={appRoutes}/>
  );
}

export default AppRouter;
