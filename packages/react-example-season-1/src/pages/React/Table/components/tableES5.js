//commonjs方式导入模块
var React = require('react');

var TableES5 = React.createClass({
    displayName: 'ES5-Table',

    //ES5的方式验证props
    propTypes: {
        datas: React.PropTypes.array.isRequired
    },

    //ES5的方式初始化state
    getInitialState: function() {
        return {
            user: 'novaline',
            age: 24
        }
    },

    //es5的方式初始化props
    getDefaultProps: function() {
        return {
            datas: [{
                "when": "2 minutes ago",
                "who": "Jill Dupre",
                "description": "Created new account"
            }, {
                "when": "1 hour ago",
                "who": "Lose White",
                "description": "Added fist chapter"
            }, {
                "when": "2 hours ago",
                "who": "Jordan Whash",
                "description": "Created new account "
            }]
        };
    },
    render: function() {
        var headings = this.props.headings.map(function(heading, index) {
            return (
                <th key={index}>{heading}</th>
            );
        });
        var rows = this.props.datas.map(function(data, index) {
            return (
                <tr key={index}>
                    <td>{data.who}</td>
                    <td>{data.description}</td>
                    <td>{data.when}</td>
                </tr>
            );
        });
        return (
            <div>
                <h3>{this.props.title}</h3>
                <table>
                    <thead>
                        <tr>
                            {headings}
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }
});

//commonjs方式对外暴露模块
module.exports = TableES5;
