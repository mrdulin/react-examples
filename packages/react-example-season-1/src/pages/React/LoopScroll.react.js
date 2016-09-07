import React, {Component} from 'react';

const style = {
	container: {
		border: '1px solid #666',
		padding: '10px 0',
		overflowX: 'auto',
		whiteSpace: 'nowrap',
	},
	list: {
		listStyle: 'none',
		padding: 0
	},
	item: {
		height: '80px',
		width: '80px',
		border: '1px solid lightblue',
		boxSizing: 'border-box',
		display: 'inline-block',
		marginRight: '20px'
	}
};

class LoopScroll extends Component{

	state = {
		datas: [
			{id: 1, name: 'angular'},
			{id: 2, name: 'react'},
			{id: 3, name: 'jquery'},
			{id: 4, name: 'html'},
			{id: 5, name: 'css'},
			{id: 6, name: 'webpack'}
		],
		oneWay: true
	}

	componentWillMount() {
		const datasClone = this.state.datas.slice(0);
		this.setState({
			datas: this.state.datas.concat(datasClone, this.state.oneWay ? [] : datasClone)
		})
	}

	calcListWidth() {
		const item = this._list.children[0];
		const dataLen = this.state.datas.length;
		const itemsTotalWidth = item.offsetWidth * dataLen;
		const itemsTotalMarginWidth = this.getItemsMarginWidth(this._list.children);

		return itemsTotalWidth + itemsTotalMarginWidth;
	}

	getItemsMarginWidth(items) {
		const itemsArr = [...items], len = itemsArr.length;
		let width = 0;

		for (let i = 0; i < len; i++) {
			const itemComputedStyle = window.getComputedStyle(itemsArr[i], null);
			//parseInt("21.5938px", 10) 得到 21， 貌似不用replace掉"px"
			//TODO margin百分比的情况，获得最终计算后的值是container的宽度的百分比，可能是由于这里的ul的宽度是动态设置的，如果预先设定一个固定的宽度，那么得到的最终计算后的值应该是正确的
			width += parseFloat(itemComputedStyle.getPropertyValue('margin-right')) + parseFloat(itemComputedStyle.getPropertyValue('margin-left'));
		}

		return width;
	}

	setListWidth(width) {
		this._list.style.width = width + 'px';
	}

	setInitPosition(width) {
		this._container.scrollLeft = this.state.oneWay ? 0 : width / 3;
	}

	componentDidMount() {
		const width = this.calcListWidth();
		console.log(width);
		this.setListWidth(width);
		this.setInitPosition(width);

		this._container.addEventListener('scroll', (e) => {
			const target = e.target;
			const scrollLeft = target.scrollLeft;

			if(this.state.oneWay) {
				if(scrollLeft > width / 2) {
					target.scrollLeft = 0;
				}
			} else {
				if(scrollLeft > width * 2 / 3) {
					target.scrollLeft = width / 3;
				} else if(scrollLeft < width / 3) {
					target.scrollLeft = width * 2 / 3;
				}
			}
		})
	}

	render() {
		
		return <div ref={ref => this._container = ref} style={style.container}>
			<ul ref={ref => this._list = ref} style={style.list}>
				{
					this.state.datas.map((data, index) => {
						return <li style={style.item} key={index}>{data.id + '.' + data.name}</li>
					})
				}
			</ul>
		</div>
	}
}

export default LoopScroll;