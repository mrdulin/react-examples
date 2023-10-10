import React from 'react';
import ReactEcharts from 'echarts-for-react';
import dayjs from 'dayjs';
import { data } from './data';

export const PeriodOptions = ['1Y', '2Y', '3Y', '5Y', '7Y'];

const fields = [
	{ key: 'ytm7Ys', color: '#B2B2B2' },
	{ key: 'ytm5Ys', color: '#FF8A5E ' },
	{ key: 'ytm3Ys', color: '#F0C390' },
	{ key: 'ytm2Ys', color: '#23B899' },
	{ key: 'ytm1Ys', color: '#808CFF' },
];
const periodNames = PeriodOptions.slice().reverse();
const option = {
	xAxis: {
		type: 'category',
		data: data.issueDates.map((date) => dayjs(date).format('YYYY-MM-DD')),
		axisLabel: { showMaxLabel: true },
	},
  yAxis: {},
	series: fields.map((f, i) => ({
		data: (data as any)[f.key] ?? [],
		name: periodNames[i],
		color: f.color,
		type: 'line',
		showSymbol: false,
		connectNulls: true,
		animation: false,
	})) as any[],
	tooltip: {
		trigger: 'axis',
	},
};

export const CanNotHoverLastSymbol = () => {
	return (
		<div style={{ width: 450 }}>
			<ReactEcharts option={option} />
		</div>
	);
};
