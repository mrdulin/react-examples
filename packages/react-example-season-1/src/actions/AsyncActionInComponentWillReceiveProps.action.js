export const requestCity = (key) => {
    return {type: 'requestCity'};
};

export const requestCitySuccess = (cityData) => {
    return {type: 'requestCitySuccess', cityData}
};

export const requestCityFail = (err) => {
    return {type: 'requestCityFail', err};
};

export const requestCityFinish = () => {
    return {type: 'requestCityFinish'};
};

export const getCities = (key) => {
    return (dispatch, getState, {api_host}) => {
        dispatch(requestCity(key));
        console.log('api_host', api_host);

        return new Promise((resolve, reject) => {
            const condition = Math.random();
            setTimeout(() => {
                const cityMap = {
                    1: {
                        'shanghai': '上海',
                        'chengdu': '成都',
                        'beijing': '北京'
                    },
                    2: {
                        'New York': '纽约',
                        'taiwan': '台湾'
                    }
                };
                if(condition > 0.1) {
                    dispatch(requestCitySuccess(cityMap[key]));
                } else {
                    dispatch(requestCityFail({code: -1, errMsg: '请稍后再试'}))
                }
                setTimeout(() => {
                    dispatch(requestCityFinish());
                }, 2000)
            }, 2000);
        });
    }
};
