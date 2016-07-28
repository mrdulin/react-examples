import React, {Component} from 'react';

class ArrayDom extends Component{
	render() {
		//Warning: Each child in an array or iterator should have a unique "key" prop. Check the render method of `ArrayDom`. See https://fb.me/react-warning-keys for more information.
		const doms = [
			<p>下楼取快递，在A座</p>,
			<p>地狱之轮</p>,
			<p>优化代码</p>
		];
		return <div>
			{doms}
		</div>
	}
}

export default ArrayDom;