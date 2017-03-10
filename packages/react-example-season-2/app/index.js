import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import store from 'app/store';

store.dispatch({type: 'globalAction'});

import Perf from 'react-addons-Perf';
window.Perf = Perf;

import 'common/scss';
import Root from './routes';

ReactDOM.render(
    <Root />,
    document.getElementById('container')
)
