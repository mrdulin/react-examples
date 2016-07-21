import React, {Component} from 'react';

//子组件的constructor,componentWillMount,componentDidMount都只调用一次，以后就算父组件的render方法再次调用，也不会再调用子组件前面说得3个方法

class AsyncComponent extends Component{
	constructor(props) {
		super(props);
		console.log('AsyncComponent constructor');
	}
	componentWillMount() {
		console.log('AsyncComponent componentWillMount')
	}
	componentDidMount() {		
		console.log('AsyncComponent componentDidMount');
	}
	componentWillReceiveProps(nextProps) {
		//第一次render的时候不会调用
		console.log('AsyncComponent componentWillReceiveProps old props', this.props)
		console.log('AsyncComponent componentWillReceiveProps nextProps', nextProps);
	}
	render() {
		return <div>
			<p>name: <span>{this.props.user.name}</span></p>
			<p>age: <span>{this.props.user.age}</span></p>						
		</div>
	}
}

export default AsyncComponent;