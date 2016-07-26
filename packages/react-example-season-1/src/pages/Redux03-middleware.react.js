import React, {Component} from 'react';
import {getWeather} from '../actions/redux03';
import {connect} from 'react-redux';

class Redux03Middleware extends Component{

	componentDidMount() {
		const {dispatch} = this.props;
		dispatch(getWeather({
			cb: res => {
				console.log('finished!', res);
			}
		}));
	}
	render() {
		return <div>
			
		</div>
	}
}

const mapStateToProps = (state) => {
	return {
		
	}
}

export default connect(mapStateToProps)(Redux03Middleware);