import React, {Component} from 'react';

//问题，异步数据，组件更新

class FilterBar extends Component{
	
	state = {
		selectedFilter: '',
		selectedSort: '',
		selectedSortField: '',
		selectedCategory2Id: '',
		selectedCategory3Id: ''
	}

	static defaultProps = {
		category3AllText: '全部商品',
		category2AllText: '全部分类'
	}

	constructor(props) {
		super(props);
		this.filters = this.clone(this.props.filters);
		this.filterLen = this.filters.length;
		this.checkboxKeys = [];
		this.filters.map((filter) => {
			const {type, key} = filter;
			if(type === 'checkbox') {
				this.checkboxKeys.push(key);
				this.state[key] = typeof filter.isChecked === 'boolean' 
				? filter.isChecked 
				: false;
			} 
			if(type === 'sort') {
				const defaultSort = filter.sorts[0];
 				this.state.selectedSort = defaultSort.field + '-' + defaultSort.direction;
			}
		})
	}

	componentDidMount() {
	}
	render() {
		const scope = this;
		const filterNodes = this.filters.map((filter, index) => {
			const {key, type, text} = filter;
			let checkboxNode = null;
			let isCheckBoxChecked;
			if(type === 'checkbox') {
				isCheckBoxChecked = (typeof scope.state[key] === 'boolean') 
				? scope.state[key] 
				: ((typeof filter.isChecked === 'boolean') ? filter.isChecked : false);
				

				checkboxNode = <input type="checkbox" 
								className="filter-checkbox" 
								onChange={() => this.onCheckboxChange(key, isCheckBoxChecked)} 
								checked={isCheckBoxChecked}/>
			}

			return <li onClick={this.selectFilter.bind(this, key, type)} 
						className={`${this.state.selectedFilter === key ? 'selected' : ''}`} 
						key={index + '-' + key}>
						{type === 'checkbox' ? <label>{checkboxNode}{text}</label> : <a>{text}</a>}
					</li>
		})

		const dropmenuFilters = this.getFiltersByType('sort');
		const dropmenuNodes = dropmenuFilters.map((filter, index) => {
			const sortNodes = filter.sorts.map((sort, idx) => {
				const {text, field, direction} = sort;
				const sortKey = field + '-' + direction;
				return <li onClick={() => this.selectSort(field, direction, text, filter)} 
							key={sortKey} 
							className={`${this.state.selectedSort === sortKey ? 'selected' : ''}`}>
							{text}
						</li>
			});
			return <div className="dropmenu sort" 
					style={{display: `${this.state.selectedFilter === filter.key ? 'block' : 'none'}`}} 
					key={index}>
				<ul className="sort-list">{sortNodes}</ul>
			</div>
		})

		const categoryFilters = this.getFiltersByType('category');
		const categoryNodes = categoryFilters.map((filter, index) => {
			const {categories, key, text} = filter;
			const categoriesClone = this.clone(categories);
			categoriesClone.unshift({id: '', name: this.props.category2AllText, children: []})
			
			const category2 = categoriesClone.map((category, idx) => {
				const {name, id} = category;
				const c2domKey = index + '-' + idx + '-' + id;
				return <div onClick={() => this.selectCategory2(id, name, filter)} 
							className={`category-item ${(this.state.selectedCategory2Id && this.state.selectedCategory2Id === id) ? 'selected' : ''}`} 
							key={c2domKey}>
							{name}
						</div>;
			})

			let category3 = null;

			if(this.state.selectedCategory2Id) {
				let category3Data = [];

				const len = categories.length;
				for (let i = 0; i < len; i++) {
					if(categories[i].id === this.state.selectedCategory2Id) {
						category3Data = this.clone(categories[i].children);
						break;
					}
				}

				category3Data.unshift({id: '', name: this.props.category3AllText, children: []})
				// console.log(category3Data)

				category3 = category3Data.map((category, idx) => {
					const {name, id} = category;
					const c3domKey = index + '-' + idx + '-' + id;
					return <div className={`category-item ${this.state.selectedCategory3Id === id ? 'selected' : ''}`} onClick={() => this.selectCategory3(id, name, filter)} key={c3domKey}>{name}</div>
				});
			}

			return <div className="dropmenu category" 
					style={{display: `${this.state.selectedFilter === key ? 'block' : 'none'}`}} 
					key={index}>
					<div className="category-group">{category2}</div>
					<div className="category-group">{category3}</div>
			</div>
		})

		return <div id="filter-bar-container">
			<div className="filter-bar">
				<ul className="filter-list">
					{filterNodes}
				</ul>
				{dropmenuNodes}
				{categoryNodes}
			</div>
			<div onClick={() => this.dismissDropMenu()} 
				className="backdrop" style={{display: `${this.state.selectedFilter.length > 0 ? 'block' : 'none'}`}}>
			</div>
		</div>
	}

	clone(obj) {
		return JSON.parse(JSON.stringify(obj));
	}

	onCheckboxChange(key, initStatus) {
		this.setState({
			[key]: (typeof this.state[key] === 'boolean') ? !this.state[key] : !initStatus
		}, this.transformFilterFieldData);
	}

	transformFilterFieldData(isCloseDropMenu = true) {
		isCloseDropMenu && this.dismissDropMenu();
		let data = {};
		const {selectedSort, selectedCategory2Id, selectedCategory3Id} = this.state; 
		const sort = selectedSort.split('-');
		const checkboxKeyLen = this.checkboxKeys.length;
		data.sort = {
			field: sort[0],
			direction: sort[1]
		};
		data.categoryId = selectedCategory3Id 
		? [selectedCategory3Id] 
		: (selectedCategory2Id ? [selectedCategory2Id] : []);
		for (let i = 0; i < checkboxKeyLen; i++) {
			const checkboxKey = this.checkboxKeys[i];
			data[checkboxKey] = this.state[checkboxKey];
		}
		this.props.onFilterChange.call(this, data);
	}

	selectCategory3(id, name, filter) {
		// console.log('selectCategory3', id);
		if(id) {
			filter.text = name;	
		} else {
			filter.text = filter._tempText;
		}
		this.setState({
			selectedCategory3Id: id
		}, this.transformFilterFieldData);

	}

	selectCategory2(id, name, filter) {
		filter._tempText = name;
		let newState = {
			selectedCategory2Id: id
		}
		if(!id) {
			filter.text = name;
			Object.assign(newState, {selectedCategory3Id: ''});
		} 
		this.setState(newState, this.transformFilterFieldData.bind(this, !id));
	}

	selectSort(sortField, direction, text,filter) {
		filter.text = text;
		this.setState({
			selectedSort: sortField + '-' + direction,
			selectedSortField: sortField
		}, this.transformFilterFieldData);

	}

	selectFilter(filterKey, filterType) {
		if(filterType === 'checkbox') {
			this.dismissDropMenu();
			return;
		}
		this.setState({selectedFilter: filterKey});
	}

	dismissDropMenu() {
		this.setState({selectedFilter: ''});
	}

	getFiltersByType(type) {
		return this.filters.filter((filter) => {
			return filter.type === type;
		});
	}
}

export default FilterBar;