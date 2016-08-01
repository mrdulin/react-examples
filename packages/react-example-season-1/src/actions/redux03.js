export const getWeather = () => {
	return {
		type: 'ajax',
		method: 'GET',
		url: 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=2c36facc61cd4ec7543be24d6a7d0509'
	}
}
