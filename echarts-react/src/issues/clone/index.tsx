import React, { useEffect, useRef } from 'react';
import ReactEcharts from 'echarts-for-react';
import { EChartsOption } from 'echarts';

const option: EChartsOption = {
	legend: {
		type: 'scroll',
		orient: 'vertical',
		right: 10,
		height: 80,
		backgroundColor: '#eee',
		textStyle: {
			color: 'red',
		},
		selected: {
			'2015': false,
		},
	},
	grid: {
		height: 100,
	},
	dataset: {
		source: [
			['product', '2015', '2016', '2017', '2018'],
			['Matcha Latte', 43.3, 85.8, 93.7, 22],
			['Milk Tea', 83.1, 73.4, 55.1, 33],
			['Cheese Cocoa', 86.4, 65.2, 82.5, 44],
			['Walnut Brownie', 72.4, 53.9, 39.1, 55],
		],
	},
	xAxis: { type: 'category' },
	yAxis: {},
	series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }, { type: 'bar' }],
};

let isCloned = false;
export const CloneExample = () => {
	const wrapperRef = useRef<HTMLDivElement>(null);
	const echartsRef = useRef<any>();

	useEffect(() => {
    if(isCloned) return;
		if (echartsRef.current) {
			const echartsInstance = echartsRef.current.getEchartsInstance();
			echartsInstance.on('finished', () => {
				const dom = echartsInstance.getDom() as HTMLElement;
				console.log("🚀 ~ file: index.tsx:47 ~ echartsInstance.on ~ dom:", dom)
				if (wrapperRef.current) {
					wrapperRef.current.appendChild(dom.cloneNode(true));
          isCloned = true;
				}
			});
		}
	}, []);

	return (
		<div ref={wrapperRef}>
			<ReactEcharts
				ref={echartsRef}
				option={option}
			/>
		</div>
	);
};
