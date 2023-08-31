import React from 'react';
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

export const Legend = () => {
	return <ReactEcharts option={option} />;
};
