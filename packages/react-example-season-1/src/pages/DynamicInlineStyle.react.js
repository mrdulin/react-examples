import React, {Component} from 'react';

class DynamicInlineStyle extends Component{

	state = {
		toggleStyle: true
	}

	render() {
		let buttonStyle;
		let backgroundColor, color;
		if(this.state.toggleStyle) {
			buttonStyle = {
				backgroundColor: '#ff6f00',
				color: '#fff'
			}
			backgroundColor = '#ff6f00';
			color = '#fff';
		} else {
			buttonStyle = {
				backgroundColor: 'lightblue',
				color: '#666'
			}
			backgroundColor = 'lightblue';
			color = '#666';
		}
		return <div>
			<button style={buttonStyle} type='button' onClick={() => this.changeButtonColor()}>按钮1</button>
			<button type='button' style={{backgroundColor, color}} onClick={() => this.changeButtonColor()}>按钮2</button>
		</div>
	}

	changeButtonColor() {
		this.setState({toggleStyle: !this.state.toggleStyle});
	}
}

export default DynamicInlineStyle;