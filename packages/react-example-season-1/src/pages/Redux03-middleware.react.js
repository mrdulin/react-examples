import React, {Component} from 'react';
import {getWeather} from '../actions/redux03';
import {connect} from 'react-redux';

class Redux03Middleware extends Component{

	componentDidMount() {
		const {dispatch} = this.props;
		dispatch(getWeather());
	}

	render() {
		const {weather} = this.props;
		return <div>
			<p>city: {weather.name}</p>
			{/*最好在reducer中定义好state树的结构（数据结构），将字段声明出来，因为在异步请求的数据返回之前，组件会走一遍render方法，这时候如果没定义字段，会报字段没有定义的错误*/}
			<p>temperature: {weather.main.temp}</p>
		</div>
	}
}

const mapStateToProps = (state) => {
	return {...state.redux03};
}

export default connect(mapStateToProps)(Redux03Middleware);
