import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, hashHistory, useRouterHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'whatwg-fetch';
import createHashHistory from 'history/lib/createHashHistory'
import store from './store';
import {Provider} from 'react-redux';

//addons
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
      require('./childComponentDidMountErrorStopParentDidMount'),
      require('./react-event-argument'),
      require('./animation'),
      require('./getWrappedInstance').default,
      require('./shouldComponentUpdate-1').default,
      require('./RouterHOC').default,
      require('./call-component-method-outside').default,
      require('./core-js-or-babel-polyfill')
    ]
  }]
}

console.log(__PROD__);

const history = useRouterHistory(createHashHistory)({ queryKey: false })

ReactDOM.render(
  <Provider store={store}>
  <MuiThemeProvider>
    <Router history={__PROD__ ? history : browserHistory} routes={rootRoute}/>
  </MuiThemeProvider>
  </Provider>, 
  document.getElementById('container')
)