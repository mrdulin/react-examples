import React, {Component} from 'react';
import {fetchWeatherData} from '../../actions/DefineReduxStateDataStructure';
import {connect} from 'react-redux';

class DefineReduxStateDataStructure extends Component{
	state = {
		city: 'London'
	}

	static defaultProps = {
		cities: {
			Shanghai: '上海',
			London: '伦敦'
		},
		tableItems: ['Pressure', 'Humidity', 'Sunrise', 'Sunset', 'Geo coords']
	}

	constructor() {
		super();
		this.selectChange = ::this.selectChange;
	}

	componentDidMount() {
		this.fetchWeatherData();
	}

	fetchWeatherData() {
		const {dispatch} = this.props;
		dispatch(fetchWeatherData(this.state.city))
	}

	render() {
		const {weather, error, cities, date, tableItems} = this.props;
		const cityOptions = Object.keys(cities).map(city => {
			return <option key={city} value={city}>{cities[city]}</option>
		});

		const tableRow = tableItems.map(tableItem => {
			const key = tableItem.toLowerCase();
			if(tableItem !== 'Geo coords') {
				return <tr key={tableItem}>
					<td>{tableItem}</td>
					<td>{weather[key]}</td>
				</tr>
			} else {
				return <tr key={tableItem}>
					<td>{tableItem}</td>
					<td>[{weather.lon}, {weather.lat}]</td>
				</tr>
			}
		})

		return <div>
			<h2>本例使用openweatherapi</h2>
			<hr/>
			<p>视图：</p>
			<div>
				<form>
					<div>
						<label htmlFor="city-list">Select City:</label>
						<select onChange={this.selectChange} name="city" id="city-list" value={this.state.city}>{cityOptions}</select>
					</div>
				</form>
			</div>
			<h3>Weather in City of {this.state.city}</h3>
			<h2>temperature: {weather.temp} °C</h2>
			<p>get at {date}</p>
			<table>
				<tbody>
					{tableRow}
				</tbody>
			</table>
			{error.cod ? <p>{error.message}</p> : null}
			<hr/>
			<p>结论：</p>
			<p>使用redux，state树的数据结构需要设计好。如何设计state树的数据结构？</p>
			<p>其中一个问题是组件在render时，数据的某个字段未定义的问题。</p>
			<p>最好在reducer中定义好state树的数据结构，将字段声明出来，因为在异步请求的数据返回之前，组件会走一遍render方法，这时候如果没定义字段，会报字段没有定义的错误。</p>
			<p>state树的数据结构设计的扁平一些好，至少在使用Object.assign()的时候不用嵌套多层对象。</p>
		</div>
	}

	selectChange(e) {
		const value = e.target.value;
        this.setState({city: value}, this.fetchWeatherData);
	}
}

const mapStateToProps = (state) => {
	return {...state.DefineReduxStateDataStructure};
}

export default connect(mapStateToProps)(DefineReduxStateDataStructure);
