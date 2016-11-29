var React = require('react');
var Navigation = require('./Navigation.jsx');
var DefineWorkout = require('./DefineWorkout.jsx');
var Store = require('./Store.jsx');
var History = require('./History.jsx');

var WorkoutLog = React.createClass({
    getInitialState: function () {
        return {view: 'define'};
    },

    render: function () {
        return (
            <div>
                <h1>Workout Log</h1>
                <Navigation onLogout={this.props.onLogout}
                            onNav={this._onNav}/>
                {this.state.view === "define" ?
                    <DefineWorkout /> : "" }
                {this.state.view === "store" ?
                    <Store /> : "" }
                {this.state.view === "history" ?
                    <History /> : "" }
            </div>
        );
    },

    _onNav: function (theView) {
        console.log('theView', theView);
        this.setState({view: theView});
    }
});

module.exports = WorkoutLog;