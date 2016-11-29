var React = require('react');

var GreetingComponent = React.createClass({
    render: function () {
        return (
            <div>Hello,{this.props.name}</div>
        );
    }
});

var GenericComponent = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Nested Custom ReactComponent</h1>
                <GreetingComponent name={this.props.name}/>
            </div>
        )
    }
});

export default React.createClass({
	render() {
		
		return <GenericComponent name="novaline"></GenericComponent>,
	}
})
