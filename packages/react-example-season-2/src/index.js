import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, hashHistory, useRouterHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'whatwg-fetch';
import createHashHistory from 'history/lib/createHashHistory'
import Perf from 'react-addons-Perf';
window.Perf = Perf;

injectTapEventPlugin();

const rootRoute = {
  childRoutes: [{
    path: '/',
    component: require('./Home').default,
    childRoutes: [
      require('./Ip'),
      require('./Mobile'),
      require('./Toutiao'),
      require('./transitionToSelf'),
      require('./react-custom-attribute'),
      require('./childComponentDidMountErrorStopParentDidMount')
    ]
  }]
}

const history = useRouterHistory(createHashHistory)({ queryKey: false })

ReactDOM.render(
  <MuiThemeProvider>
    <Router history={__PROD__ ? history : browserHistory} routes={rootRoute}/>
  </MuiThemeProvider>, 
  document.getElementById('container')
)