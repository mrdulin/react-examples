import React, {Component} from 'react';

class xScroll extends Component {

	componentDidMount() {
		const scope = this;
		this._container.addEventListener('scroll', (e) => {
			console.log('xscroll');
			window.clearTimeout(scope.scrollTimer);
			//滚动结束触发
			scope.scrollTimer = window.setTimeout(scope.scrollEndCallback, 250, e);
		});
	}

	scrollEndCallback(e) {
		console.log('scroll end', e);
	}

	render() {
		//Warning: Unsupported style property overflow-x. Did you mean overflowX? Check the render method of `xScroll`.
		const styles = {
			container: {
				border: '1px solid #ddd',
				overflowX: 'auto',
				overflowY: 'hidden'
			},
			list: {
				width: '2000px'
			},
			item: {
				float: 'left',
				width: '150px',
				height: '100px',
				marginLeft: '10px',
				border: '1px solid #ddd'
			}
		};

		const items = [1, 2, 3, 4, 5].map((el, index) => {
			return (
				<li style={styles.item} key={index}>{el}</li>
			);
		});

		return (
			<div ref={(ref) => this._container = ref} style={styles.container}>
				<ul style={styles.list}>
					{items}
				</ul>
			</div>
		);
	}

};

export default xScroll;
