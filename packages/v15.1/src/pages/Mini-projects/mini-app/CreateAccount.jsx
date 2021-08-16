var React = require('react');

var CreateAccount = React.createClass({
    render: function () {
        return (
            <div>
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
                        <label htmlFor="cfmPassword">Confirm Password</label>
                        <input type="password" id="cfmPassword"/>
                    </div>
                    <div>
                        <button type="button" id="createAccount"
                                onClick={this.props.onAuthComplete.bind(null, this._createAccount)}>Create Account
                        </button>
                    </div>
                </form>
            </div>
        );
    },

    _createAccount: function () {
        return true;
    }
});

module.exports = CreateAccount;