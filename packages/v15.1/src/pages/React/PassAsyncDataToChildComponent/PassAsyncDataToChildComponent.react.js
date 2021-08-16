import React, {Component} from 'react';
import AsyncComponent from './components/AsyncComponent.react';

class PassAsyncDataToChildComponent extends Component{

	state = {
		isDone: false
	}

	componentWillMount() {
		this.user = {
			name: 'novaline',
			age: 23
		};
	}

	componentDidMount() {
		this.timeoutId = window.setTimeout(() => {
			this.user.name = 'mrdulin';
			//上面这样不会虽然数据变了，但是该组件及其子组件的UI都不会更新,因为没有再次调用render
			//只有再次调用setState或者更新state tree才会再次调用render方法，更新视图
			this.setState({isDone: true});
		}, 1000)
	}

	render() {
		return <div>
			<AsyncComponent user={this.user}></AsyncComponent>
		</div>
	}
}

export default PassAsyncDataToChildComponent;