var React = require('react');

var Option = React.createClass({
    render: function () {
        return <option>{this.props.value}</option>
    }
});

var StoreWorkout = React.createClass({
    _mockWorkouts: [
        {
            "name": "Murph",
            "type": "fortime",
            "description": "Run 1 Mile \n 100 pull-ups \n 200 push-ups \n 300 squats \n Run 1 Mile"
        },
        {
            "name": "Tabata Something Else",
            "type": "reps",
            "description": "4 x 20 seconds on 10 seconds off for 4 minutes \n pull-ups, push-ups, sit-ups, squats"
        }
    ],

    render: function () {
        var opts = [], len = this._mockWorkouts.length;
        for (var i = 0; i < len; i++) {
            opts.push(<Option key={i} value={this._mockWorkouts[i].name}></Option>);
        }
        return (
            <div id="logWorkout" className="tabview">
                <h2>Record Workout</h2>
                <div>
                    <label htmlFor="chooseWorkout">Workout:</label>
                    <select name="" id="chooseWorkout">
                        {opts}
                    </select>
                </div>
                <div>
                    <label htmlFor="workoutResult">Result:</label>
                    <input id="workoutResult" type="text"/>
                </div>
                <div>
                    <label htmlFor="workoutDate">workoutDate:</label>
                    <input id="workoutDate" type="date"/>
                </div>
                <div>
                    <label htmlFor="notes">Notes:</label>
                    <textarea id="notes"></textarea>
                </div>

                <button>Store</button>
            </div>
        );
    }
});

module.exports = StoreWorkout;