/**
 * Created by dul on 2016/5/14.
 */
var React = require('react');

var MyComponent = React.createClass({
    render: function () {
        var obj = React.Children.map(this.props.children, function (child) {
            console.log(child, this);
            return child;
        }, this);
        console.log('map', obj);

        //和React.Children.map类似，但是没有返回结果
        var result = React.Children.forEach(this.props.children, function (child) {
            console.log(child, this);
        }, this);
        console.log('forEach', result); //=>undefined

        var count = React.Children.count(this.props.children);
        console.log(count);  //=>2

		//var only = React.Children.only(this.props.children);
		//console.log(only);  //=>Uncaught Invariant Violation: onlyChild must be passed a children with exactly one child.

        return (
            <div>{this.props.name}</div>
        );
    }
});

export default React.createClass({
	render() {
		
		return <MyComponent name="novaline">
			<p key="firsty">a child</p>
			<p key="2">another</p>
		</MyComponent>

	}

})

