const initState = {
	weather: {
		temp: '',
		pressure: '',
		humidity: '',
		sunrise: new Date().getTime(),
		sunset: new Date().getTime(),
		lat: '',
		lon: ''
	},
	date: '',
	error: {}
};

export const DefineReduxStateDataStructure = (state = initState, action) => {
	switch (action.type) {
		case 'DefineReduxStateDataStructure_getWeatherSuccess':
			const date = new Date();
			const dateFormat = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();

			//state数据结构扁平化
			const weather = action.payload.weather;
			const {main, sys, coord, name, wind, clouds} = weather;

			sys.sunrise = new Date(sys.sunrise).toLocaleTimeString();
			sys.sunset = new Date(sys.sunset).toLocaleTimeString();

			main.humidity = main.humidity + ' %';
			main.pressure = main.pressure + ' hpa';

			clouds.all = clouds.all + ' %';

			return Object.assign({}, state, {
				weather: {...main, ...sys, ...coord, ...wind, ...clouds, name},
				error: {},
				date: dateFormat
			});
		case 'DefineReduxStateDataStructure_getWeatherFail':
			return Object.assign({}, state, {error: action.payload.err})
		default:
			return state;
	}
}
