import React from 'react';
import ReactEcharts from 'echarts-for-react';

var option = {
	dataset: [
		{
			// 这个 dataset 的 index 是 `0`。
			source: [
				['Product', 'Sales', 'Price', 'Year'],
				['Cake', 123, 32, 2011],
				['Cereal', 231, 14, 2011],
				['Tofu', 235, 5, 2011],
				['Dumpling', 341, 25, 2011],
				['Biscuit', 122, 29, 2011],
				['Cake', 143, 30, 2012],
				['Cereal', 201, 19, 2012],
				['Tofu', 255, 7, 2012],
				['Dumpling', 241, 27, 2012],
				['Biscuit', 102, 34, 2012],
				['Cake', 153, 28, 2013],
				['Cereal', 181, 21, 2013],
				['Tofu', 395, 4, 2013],
				['Dumpling', 281, 31, 2013],
				['Biscuit', 92, 39, 2013],
				['Cake', 223, 29, 2014],
				['Cereal', 211, 17, 2014],
				['Tofu', 345, 3, 2014],
				['Dumpling', 211, 35, 2014],
				['Biscuit', 72, 24, 2014],
			],
			// id: 'a'
		},
		{
			// 这个 dataset 的 index 是 `1`。
			// 这个 `transform` 配置，表示，此 dataset 的数据，来自于此 transform 的结果。
			transform: {
				type: 'filter',
				config: { dimension: 'Year', value: 2011 },
			},
			// 我们还可以设置这些可选的属性： `fromDatasetIndex` 或 `fromDatasetId`。
			// 这些属性，指定了，transform 的输入，来自于哪个 dataset。例如，
			// `fromDatasetIndex: 0` 表示输入来自于 index 为 `0` 的 dataset 。又例如，
			// `fromDatasetId: 'a'` 表示输入来自于 `id: 'a'` 的 dataset。
			// 当这些属性都不指定时，默认认为，输入来自于 index 为 `0` 的 dataset 。
		},
		{
			// 这个 dataset 的 index 是 `2`。
			// 同样，这里因为 `fromDatasetIndex` 和 `fromDatasetId` 都没有被指定，
			// 那么输入默认来自于 index 为 `0` 的 dataset 。
			transform: {
				// 这个类型为 "filter" 的 transform 能够遍历并筛选出满足条件的数据项。
				type: 'filter',
				// 每个 transform 如果需要有配置参数的话，都须配置在 `config` 里。
				// 在这个 "filter" transform 中，`config` 用于指定筛选条件。
				// 下面这个筛选条件是：选出维度（ dimension ）'Year' 中值为 2012 的所有
				// 数据项。
				config: { dimension: 'Year', value: 2012 },
			},
		},
		{
			// 这个 dataset 的 index 是 `3`。
			transform: {
				type: 'filter',
				config: { dimension: 'Year', value: 2013 },
			},
		},
	],
	series: [
		{
			type: 'pie',
			radius: 50,
			center: ['25%', '50%'],
			// 这个饼图系列，引用了 index 为 `1` 的 dataset 。也就是，引用了上述
			// 2011 年那个 "filter" transform 的结果。
			datasetIndex: 1,
		},
		{
			type: 'pie',
			radius: 50,
			center: ['50%', '50%'],
			datasetIndex: 2,
		},
		{
			type: 'pie',
			radius: 50,
			center: ['75%', '50%'],
			datasetIndex: 3,
		},
	],
};

export const Transform = () => {
	return <ReactEcharts option={option} />;
};
