var React = require('react');

var ListItem = React.createClass({
    render: function () {
        return <li>{this.props.name} + {this.props.result}</li>;
    }
});
var History = React.createClass({
    _mockHistory: [
        {
            "name": "Murph",
            "result": "32:18",
            "notes": "painful, but fun"
        },
        {
            "name": "Tabata Something Else",
            "type": "reps",
            "result": "421",
            "notes": ""
        }
    ],
    render: function () {
        var hist = this._mockHistory;
        var formatedLi = [];
        for (var i = 0; i < hist.length; i++) {
            var histObj = {
                key: i,
                name: hist[i].name, result: hist[i].result
            };
            formatedLi.push(<ListItem {...histObj} />);
        }
        return (
            <div>
                <h2>History</h2>
                <ul>
                    {formatedLi}
                </ul>
            </div>
        );
    }
});

module.exports = History;