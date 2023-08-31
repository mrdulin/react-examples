import React from 'react';
import ReactEcharts from 'echarts-for-react';

const option = {
	tooltip: {
		trigger: 'axis',
		axisPointer: { type: 'cross' },
	},
	legend: {},
	xAxis: [
		{
			type: 'category',
			axisTick: {
				alignWithLabel: true,
			},
			data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
		},
	],
	yAxis: [
		{
			type: 'value',
			name: '降水量',
			min: 0,
			max: 250,
			position: 'right',
			axisLabel: {
				formatter: '{value} ml',
			},
		},
		{
			type: 'value',
			name: '温度',
			min: 0,
			max: 25,
			position: 'left',
			axisLabel: {
				formatter: '{value} °C',
			},
		},
	],
	series: [
		{
			name: '降水量',
			type: 'bar',
			yAxisIndex: 0,
			data: [6, 32, 70, 86, 68.7, 100.7, 125.6, 112.2, 78.7, 48.8, 36.0, 19.3],
		},
		{
			name: '温度',
			type: 'line',
			smooth: true,
			yAxisIndex: 1,
			data: [6.0, 10.2, 10.3, 11.5, 10.3, 13.2, 14.3, 16.4, 18.0, 16.5, 12.0, 5.2],
		},
	],
};

export const Axis = () => {
	return <ReactEcharts option={option} />;
};
