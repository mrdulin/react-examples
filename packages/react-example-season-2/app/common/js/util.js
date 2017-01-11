const util = ((window, document) => {
    return {
        params: (paramsObj) => {
            const esc = encodeURIComponent;
            return Object.keys(paramsObj)
                        .map(k => esc(k) + '=' + esc(paramsObj[k]))
                        .join('&');
        }
    }
})(window, document);
module.exports = util;