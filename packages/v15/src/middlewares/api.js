export const CALL_API = Symbol('MY CALL API MIDDLEWARE');

const actionWith = (origAction, data) => {
    const action = Object.assign({}, origAction, data);
    delete action[CALL_API];
    return action;
}

const getRequest = ({api, method = 'get', body, params = {}, headers, credentials = 'same-origin'}) => {
        const reqMethod = method.toLowerCase();
        let url = api || util.API;
        let reqOpts;
        if(reqMethod === 'get') {
            const u = new URLSearchParams();
            const paramKeys = Object.assign(params);
            if(paramKeys.length > 0) {
                paramKeys.forEach((key, index) => {
                    u.append(key, params[key]);
                });
                url = url + `?${u}`;
            }
            reqOpts = {method, headers, credentials};
        } else if(reqMethod === 'post') {
            reqOpts = {method, body, headers, credentials};
        }

        return new Request(url, reqOpts);
    }

const callApi = (opts) => {
    const req = getRequest(opts);
    return fetch(req).then(res => res.json());
}

const callApiMiddleware = store => next => action => {
    const call_api = action[CALL_API];
    if(typeof call_api === 'undefined') {
        return next(action);
    }

    const {payload, types} = call_api;

    const [BUSSINESS_REQUEST_SUCCESS, REQUEST, REQUEST_SUCCESS, REQUEST_FAIL, BUSSINESS_REQUEST_FAIL] = types;

    REQUEST && next(actionWith(action, {type: REQUEST}));

    return callApi(payload)
        .then(data => {
            //TODO 验签

            let isPass = false;
            if(isPass) {
                return next(actionWith(action, {type: REQUEST_FAIL, res: 'res check error'}));
            }

            if(REQUEST_SUCCESS) {
                next(actionWith(action, {type: REQUEST_SUCCESS, res: data.systime || new Date().getTime()}));
            }

            //code检查，进行相应逻辑
            if(data.Error == 401) {
                util.needReLogin(payload.isIndirect);
            } else if(data.Error > 1) {
                data.ext = 'BUSSINESS_REQUEST_FAIL';
                return next(actionWith(action, {type: BUSSINESS_REQUEST_FAIL, res: data}));
            } else if(data.Error == 0) {
                return next(actionWith(action, {type: BUSSINESS_REQUEST_SUCCESS, res: data}));
            } 


        }).catch(err => next(actionWith(action, {type: REQUEST_FAIL, res: err.message || 'REQUEST_FAIL'})))

}

export default callApiMiddleware;