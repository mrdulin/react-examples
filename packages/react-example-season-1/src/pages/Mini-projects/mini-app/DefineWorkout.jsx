var React = require('react');

var DefineWorkout = React.createClass({
    render: function () {
        return (
            <div id="defineWorkouts">
                <h2>Define Workout</h2>
                <form>
                    <div>
                        <label htmlFor="defineName">Define Name</label>
                        <input type="text" id="defineName"/>
                    </div>
                    <div>
                        <label htmlFor="defineType">Define Type</label>
                        <input id="defineType" type="text"/>
                    </div>
                    <div>
                        <label htmlFor="defineDesc">Description</label>
                        <textarea id="defineDesc"></textarea>
                    </div>
                    <div>
                        <button id="saveDefinition">Save Definition</button>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = DefineWorkout;