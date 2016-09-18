import * as Action from './common.action';
import {util} from '../common/js/util';

// export const getWeather = () => {
// 	return {type: 'DefineReduxStateDataStructure_getWeather'}
// }

export const getWeatherSuccess = (weather) => {
	return {
		type: 'DefineReduxStateDataStructure_getWeatherSuccess',
		payload: {
			weather
		}
		//error: false 不用设置可选的error参数，默认地，error是undefined，只要不是true，都认为action没有发生错误
	}
}

export const getWeatherFail = (err) => {
	return {
		type: 'DefineReduxStateDataStructure_getWeatherFail',
		payload: {
			err
		},
		error: true 
	}
}

export const fetchWeatherData = (q = 'shanghai', units = 'metric') => {
	return (dispatch, getState) => {
		let url = util.openweatherApiHost + '/weather';
		//TODO 转移下面3行到util中
		url = new URL(url);
		const params = {q, units, appid: util.openweatherApiKey};
		Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

		dispatch(Action.request());
		return fetch(url).then(res => {
			return res.json();
		}).then(json => {
			if(Number.parseInt(json.cod, 10) !== 200) {
				return Promise.reject(json);
			} else {
				dispatch(getWeatherSuccess(json));
				dispatch(Action.requestSuccess());
				return Promise.resolve(getState());
			}
		})
		.catch(err => {
			dispatch(getWeatherFail(err));
			dispatch(Action.requestFail());
			return Promise.reject(getState());
		});
	}
}




