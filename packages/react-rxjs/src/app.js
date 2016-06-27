import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';

import Home from './pages/Home.react';

class App extends Component {
    render() {
        return (
            <div>
                <h1>Weather Application</h1>
                <Home></Home>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
