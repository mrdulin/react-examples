import React from 'react';
import ReactDOM from 'react-dom';

import TableES6 from './components/tableES6';
import TableES5 from './components/tableES5'

class App extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>React Table ES6 Version</h1>
                <TableES6></TableES6>
                <h1>React Table ES5 Version</h1>
                <TableES5></TableES5>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('container')
);
