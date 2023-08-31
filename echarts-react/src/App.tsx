import React from 'react';
import './App.css';
// import { Test } from './examples/type-category-formatter-ts-type';
import { DatasetMapToSeries } from './examples/dataset-map-to-series';
import { Transform } from './examples/transform';
import { Axis } from './examples/axis';
import { Legend } from './examples/legend';

function App() {
	return (
		<div className='App'>
			{/* <Test /> */}
			<h2>dataset map to series</h2>
			<DatasetMapToSeries />
			<h2>transform</h2>
			<Transform />
			<h2>axis</h2>
			<Axis />
			<h2>legend</h2>
			<Legend />
		</div>
	);
}

export default App;
