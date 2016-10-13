import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, hashHistory, useRouterHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'whatwg-fetch';
import createHashHistory from 'history/lib/createHashHistory'

injectTapEventPlugin();

const rootRoute = {
  childRoutes: [{
    path: '/',
    component: require('./Home').default,
    childRoutes: [
      require('./Ip'),
      require('./Mobile'),
      require('./Toutiao'),
      require('./transitionToSelf')
    ]
  }]
}

const history = useRouterHistory(createHashHistory)({ queryKey: false })

ReactDOM.render(
  <MuiThemeProvider>
    <Router history={true ? history : browserHistory} routes={rootRoute}/>
  </MuiThemeProvider>, 
  document.getElementById('container')
)