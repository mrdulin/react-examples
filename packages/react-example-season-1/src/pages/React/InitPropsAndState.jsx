/**
 * Created by dul on 2016/5/15.
 */
var React = require('react');

var GenericComponent = React.createClass({
    getDefaultProps: function () {
        return {thingy: "cheese"};
    },

    getInitialState: function () {
        return {thing: this.props.thingy};
    },

    render: function () {
        return (<div>{this.props.thingy}</div>);
    }
});

export default React.createClass({
	render() {
		
		return <GenericComponent />
	}
})

