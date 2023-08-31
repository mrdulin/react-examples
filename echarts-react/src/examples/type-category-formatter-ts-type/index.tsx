import React from 'react';
import ReactEcharts, { EChartsOption } from 'echarts-for-react';
import { XAXisComponentOption } from 'echarts';
import dayjs from 'dayjs';
import data from './data.json';

const getOption = (data: any[]): EChartsOption => {
	const xAxis: XAXisComponentOption = {
		type: 'category',
		axisPointer: { label: { show: false } },
		data: data.map((item) => item.issueTime),
		axisLabel: {
			formatter: (value: string) => dayjs(+value).format('HH:mm'),
		},
	};

	const series = [
		{
			id: 'yield',
			name: '成交价',
			type: 'line',
			data: data.map((item) => item.yield ?? '--'),
		},
		{
			id: 'chinaBond',
			name: '中债估值',
			type: 'line',
			data: data.map((item) => item.cbYieldStr),
		},
		{
			id: 'csYieldStr',
			name: '中证估值',
			type: 'line',
			data: data.map((item) => item.csYieldStr),
		},
	];

	return {
		xAxis,
		series,
		yAxis: {},
	};
};

export const Test = () => {
	return <ReactEcharts option={getOption(data.data)} />;
};
