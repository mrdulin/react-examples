import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, hashHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'whatwg-fetch';
injectTapEventPlugin();

const rootRoute = {
  childRoutes: [{
    path: '/',
    component: require('./Home').default,
    childRoutes: [
      require('./Ip'),
      require('./Mobile')
    ]
  }]
}

ReactDOM.render(
  <MuiThemeProvider>
    <Router history={__PROD__ ? hashHistory : browserHistory} routes={rootRoute}/>
  </MuiThemeProvider>, 
  document.getElementById('container')
)