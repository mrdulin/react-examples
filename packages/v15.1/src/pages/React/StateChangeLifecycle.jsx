/**
 * Created by dul on 2016/5/15.
 */
var React = require('react');

var GenericComponent = React.createClass({
    getInitialState: function () {
        return {name: 'novaline'};
    },

    shouldComponentUpdate: function (nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);
        return true;
    },
    componentWillUpdate: function (prevProps, prevState) {
        console.log('componentWillUpdate', prevProps, prevState);
    },
    render: function () {
        console.log('render');
        return (
            <div>
                <p>name is: <span>{this.state.name}</span></p>
                <button type="button" onClick={this.changeName}>修改名字</button>
            </div>
        );
    },
    componentDidUpdate: function (prevProps, prevState) {
        console.log('componentDidUpdate', prevProps, prevState);
    },


    changeName: function () {
        this.setState({name: 'Google'});
    }
});

export default React.createClass({
	render() {
				
		return <GenericComponent></GenericComponent>
	}
})
