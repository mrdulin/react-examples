import React from 'react';

class App extends React.Component{
    render() {
        return (
            <div id="app">
                <h1>welcome to React examples app. </h1>
                {this.props.children}
            </div>
        );
    }
};

//如果某个component没有export，则会报下面错误，比如Table.react.js中没有export任何东西;
//Warning: Failed propType: Invalid prop `component` supplied to `Route`
//Warning: [react-router] Invalid undefined `component` supplied to `Route`.
App.propTypes = {
    children: React.PropTypes.node
};

export default App;
