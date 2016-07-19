import React, { Component } from 'react';
import FilterBar from '../components/FilterBar.react';

class Filter extends Component {
    render() {
        const filters = [{
            text: '全部分类',
            key: 'category',
            type: 'category',
            categories: [
            	{
                    "id": "30003",
                    "name": "医疗器械",
                    "children": [{
                        "id": "30039",
                        "name": "检测用具",
                        "children": [{
                            "id": "30324",
                            "name": "血压计"
                        }]
                    }]
                }
            ]
        }, {
            text: '默认排序',
            key: 'sort',
            type: 'sort',
            sorts: [
	            { text: '默认排序', field: "score", direction: "DESC" }, 
	            { text: "销量排序", field: "salesVolume", direction: "DESC" },
	            { text: "价格由低到高", field: "price", direction: "ASC" },
	            { text: "价格由高到低", field: "price", direction: "DESC" }
            ]

        }, {
            text: '健康金',
            key: 'healthGoldItem',
            type: 'checkbox',
            isChecked: true
        }, {
        	text: '1小时送达',
        	key: 'oneHour',
        	type: 'checkbox',
        	isChecked: false
        }];

        const bizTypes = ['O2O_ONLY', 'B2C_ONLY', 'BOTH_O2O_B2C'];

        const bizType = bizTypes[0];

        return <div>
			<h2>filter component example</h2>
			<FilterBar 
				filters={filters}
				onFilterChange={filterObj => this.onFilterChange(filterObj)}>
			</FilterBar>
		</div>
    }

    onFilterChange(filterData) {
        console.log(filterData);

    }
}

export default Filter;
