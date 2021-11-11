/**
 * Created by dul on 2016/5/14.
 */
var React = require('react');

var MyComponent = React.createClass({
    displayName: 'MyComponent',

    render: function () {
        return React.createElement('div', null, this.props.name);
    }
});

export default React.createClass({
	render() {
		
		return React.createElement(MyComponent, {name: 'novaline'});
	}
})
