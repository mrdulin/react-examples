import { EChartsOption } from 'echarts';
import dayjs from 'dayjs';

const getOption = (data: any[]): EChartsOption => {
	const initialXAxis: EChartsOption['xAxis'] = {
    // https://stackoverflow.com/questions/77013759/types-of-property-boundarygap-are-incompatible
		boundaryGap: true,
	};
	const xAxis: EChartsOption['xAxis'] = {
		...initialXAxis,
		type: 'category',
		data: data.map((item) => item.issueTime),
		axisLabel: {
			formatter: (value: string) => dayjs(+value).format('HH:mm'),
		},
	};

	const series: EChartsOption['series'] = [];

	return {
		xAxis,
		series,
		yAxis: {},
	};
};
