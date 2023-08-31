import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { EChartsOption } from 'echarts';

const option: EChartsOption = {
	legend: {},
	tooltip: {},
	dataset: {
		source: [
			['product', '2012', '2013', '2014', '2015'],
			['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
			['Milk Tea', 86.5, 92.1, 85.7, 83.1],
			['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4],
		],
	},
	xAxis: [
		{
			type: 'category',
			gridIndex: 0,
			// axisLine: {
			// 	symbol: 'arrow',
			// 	lineStyle: {
			// 		type: 'dashed',
			// 	},
			// },
		},
		{ type: 'category', gridIndex: 1 },
	],
	yAxis: [{ gridIndex: 0 }, { gridIndex: 1 }],
	grid: [{ bottom: '55%' }, { top: '55%' }],
	series: [
		// 这几个系列会出现在第一个直角坐标系中，每个系列对应到 dataset 的每一行。
		{ type: 'bar', seriesLayoutBy: 'row' },
		{ type: 'bar', seriesLayoutBy: 'row' },
		{ type: 'bar', seriesLayoutBy: 'row' },
		// 这几个系列会出现在第二个直角坐标系中，每个系列对应到 dataset 的每一列。
		{ type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
		{ type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
		{ type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
		{ type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
	],
};

export const DatasetMapToSeries = () => {
	return <ReactEcharts option={option} />;
};
