var React = require('react');

var SignIn = React.createClass({
    render: function () {
        return (
            <form>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username"/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password"/>
                </div>
                <div>
                    <button id="signIn"
                            type="button"
                            onClick={this.props.onAuthComplete.bind(null, this._doAuth)}>Sign In
                    </button>
                </div>
            </form>
        );
    },

    _doAuth: function () {
        return true;
    }
});

module.exports = SignIn;

