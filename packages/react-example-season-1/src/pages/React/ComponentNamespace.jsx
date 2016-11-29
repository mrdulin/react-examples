var React = require('react');

var FormComponent = React.createClass({
    render: function () {
        console.log(this.props);
        return (
            <form>{this.props.children}</form>
        );
    }
});

FormComponent.Row = React.createClass({
    render: function () {
        console.log(this.props);
        return (
            <div className="form-group">{this.props.children}</div>
        );
    }
});

FormComponent.Label = React.createClass({
    render: function () {
        console.log(this.props);
        return (
            <label className="control-label" htmlFor={this.props.for}>
                {this.props.text}
                {this.props.children}
            </label>
        );
    }
});

FormComponent.Input = React.createClass({
    render: function () {
        console.log(this.props);
        return (
            <input className="form-control" type={this.props.type} id={this.props.id}/>
        );
    }
});

var Form = FormComponent;
var App = (
    <Form>
        <Form.Row>
            <Form.Label text="label" for="txt">
                <Form.Input id="txt" type="text"></Form.Input>
            </Form.Label>
        </Form.Row>
    </Form>
);

export default React.createClass({
	render() {
		return <div>
			{App}
		</div>
	}
});
