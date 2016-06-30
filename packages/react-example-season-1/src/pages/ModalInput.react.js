import React, {Component} from 'react';

const style = {
	container: {
		position: 'fixed',
		top: 0,
		bottom: 0,
		width: '100%',
		zIndex: 100,
		backgroundColor: 'rgba(0,0,0,0.6)'
	},
	modal: {
		width: '300px',
		height: '250px',
		backgroundColor: '#fff',
		border: '1px solid #ddd',
		// margin: '100px auto 0',
	    position: 'fixed',
	    left: '50%',
	    marginLeft: '-150px',
	    top: '100px'
	},
	input: {
		border: '1px solid #ddd',
		padding: '10px'
	},
	item: {
		height: '200px',
		border: '1px solid #ddd'
	}
};

class ModalInput extends Component{
	state = {
		windowInnerHeight: window.innerHeight,
		keyboardHeight: 0
	}
	componentDidMount() {
		//阻止穿透模态框遮罩能继续滑动页面
		document.body.style.overflow = 'hidden';
		document.body.style.position = 'fixed';
	}

	render() {
		return <div>
			<div>
				<ul>
					{
						[1,2,3,4,5,6].map((el, index)=> {
							return <li style={style.item} key={index}>{el}</li>
						})
					}
				</ul>
			</div>
			<div style={style.container}>
				<div style={style.modal}>
					<h1>模态框</h1>
					<p>window innerHeight: {this.state.windowInnerHeight}</p>
					<p>keyboardHeight: {this.state.keyboardHeight}</p>
					<div>
						<label>
							<input onFocus={() => this.inputFocus()} style={style.input} type="text" placeholder="请输入验证码"/>
						</label>
					</div>
				</div>
			</div>
		</div>
		
	}

	virtualKeyboardHeight() {
	    var sx = document.body.scrollLeft, sy = document.body.scrollTop;
	    var naturalHeight = window.innerHeight;
	    window.scrollTo(sx, document.body.scrollHeight);
	    var keyboardHeight = naturalHeight - window.innerHeight;
	    window.scrollTo(sx, sy);
	    return keyboardHeight;
	}

	inputFocus() {
		window.setTimeout(() => {
			this.setState({
				windowInnerHeight: window.innerHeight,
				keyboardHeight: this.virtualKeyboardHeight()
			})
			window.scrollTo(0,0);
		}, 10)
	}
}

export default ModalInput;