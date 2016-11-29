var React = require('react');
var SignIn = require('./SignIn.jsx');
var CreateAccount = require('./CreateAccount.jsx');

var Authentication = React.createClass({
    render: function () {
        return (
            <div>
                <SignIn onAuthComplete={this.props.onAuthComplete}></SignIn>
                <CreateAccount onAuthComplete={this.props.onAuthComplete}></CreateAccount>
            </div>
        );
    }
});

module.exports = Authentication;