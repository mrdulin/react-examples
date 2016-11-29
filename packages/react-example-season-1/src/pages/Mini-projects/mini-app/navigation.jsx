var React = require('react');

var Navigation = React.createClass({
    render: function () {
        return (
            <ul>
                <li>
                    <a href="#" onClick={this.props.onNav.bind(null, this._nav("define"))}>Define A Workout</a>
                </li>
                <li>
                    <a href="#" onClick={this.props.onNav.bind(null, this._nav("store"))}>Record A Workout</a>
                </li>
                <li>
                    <a href="#" onClick={this.props.onNav.bind(null, this._nav("history"))}>View History</a>
                </li>
                <li>
                    <a href="#" onClick={this.props.onLogout}>Logout</a>
                </li>
            </ul>
        );
    },

    _nav: function (view) {
        return view;
    }
});

module.exports = Navigation;
