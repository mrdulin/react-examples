import React from 'react';
import componentLifeCycleMixins from '../mixins/componentLifeCycleMixins';

var TableES5 = React.createClass({
    propTypes: {
        datas: React.PropTypes.array.isRequired
    },

    mixins: [componentLifeCycleMixins],

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

        // return '123';
    },
    render: function() {
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
            <table>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
});


export default TableES5;
