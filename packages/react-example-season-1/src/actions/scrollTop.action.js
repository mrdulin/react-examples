import 'whatwg-fetch';

export const request = (q) => {
    return {type: 'request', q};
};

export const requestSuccess = (data) => {
    return {type: 'requestSucess', data};
}

export const requestError = (err) => {
    return {type: 'requestError', err};
}

const _parseJSON = function(response) {
  return response.text().then(function(text) {
    return text ? JSON.parse(text) : {}
  })
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function parseJSON(response) {
  return response.json()
}

export const getBook = (q) => {;
    const url = `https://api.douban.com/v2/book/search?q=${q}`;

    return dispatch => {
        dispatch(request(q));

        return fetch(url, {
            mode: 'no-cors',
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(checkStatus)
        .then(parseJSON)
        .then(data => {
            const books = data;
            dispatch(requestSuccess(data));
        }).catch(err => {
            //Error at checkStatus
            dispatch(requestError(err));
        });
    }
};
