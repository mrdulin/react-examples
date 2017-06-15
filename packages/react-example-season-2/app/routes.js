import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, browserHistory, useRouterHistory } from 'react-router';
import { Provider } from 'react-redux';
import createHashHistory from 'history/lib/createHashHistory';

import store from './store';

const routes = {
  path: '/',
  component: require('modules/Home'),
  getChildRoutes(nextState, cb) {
    require.ensure([], require => {
      cb(null, [
        require('./modules/Ip'),
        require('./modules/Mobile'),
        require('./modules/Toutiao'),
        require('./modules/transitionToSelf'),
        require('./modules/CustomAttributes'),
        require('./modules/DidMountError'),
        require('./modules/EventArguments'),
        require('./modules/Animation'),
        require('./modules/getWrappedInstance'),
        require('./modules/SCU'),
        require('./modules/RouterHOC'),
        require('./modules/CallComponentMethodOutside'),
        require('./modules/CoreJSAndTransformRuntime'),
        require('./modules/ImageZoom'),
        require('./modules/ReactPinchZoom'),
        require('./modules/SearchBook'),
        require('./modules/TestScroller'),
        require('./modules/TestStarRating'),
        require('./modules/ImageUpload'),
        require('./modules/ImmutabilityHelper'),
        require('./modules/AvoidRequireDuplication'),
        require('./modules/DataRef'),
        require('./modules/ReturnListMapDirectly'),
        require('./modules/FunctionAsChildComponents'),
        require('./modules/DefaultProps'),
        require('./modules/ComponentKeyProperty'),
        require('./modules/setStateInComponentWillMount'),
        require('./modules/setStateFromStoreData'),
        require('./modules/ReselectLearning'),
        require('./modules/GetUrlQueryParameters'),
        require('./modules/redux-actions-flow'),
        {
          path: '*',
          onEnter: (nState, replace) => replace('/')
        }
      ]);
    }, 'dynamicRoutes');
  }
};

const history = useRouterHistory(createHashHistory)({ queryKey: false });

/*const Root = () => {
  return <Provider store={store}>
    <MuiThemeProvider>
      <Router history={__PROD__ ? history : browserHistory} routes={routes} />
    </MuiThemeProvider>
  </Provider>
};*/

const suffix = '被调用, this指向： ';

class Root extends React.Component {
  state = {
    foo: 'bar'
  };

  handler() {
    console.log(`handler ${suffix}`, this);
  }

  render() {
    // const { foo } = this.state;
    // this.handler();
    // window.handler = this.handler;
    // window.handler();

    return (
      <div>
        {/*<p onClick={this.handler}>{foo}</p>*/}
        <Provider store={store}>
          <MuiThemeProvider>
            <Router history={__PROD__ ? history : browserHistory} routes={routes} />
          </MuiThemeProvider>
        </Provider>
      </div>
    )
  }
}

export default Root;
