const util = ((window, document) => {

    return {
        /**
         * @desc passive特性检测
         */
        passiveSupport: () => {
            var supportsPassive = false;
            try {
                var opts = Object.defineProperty({}, 'passive', {
                    get: function () {
                        supportsPassive = true;
                    }
                });
                window.addEventListener("test", null, opts);
            } catch (e) {}

            return supportsPassive;
        },

        params: (paramsObj) => {
            const esc = encodeURIComponent;
            return Object.keys(paramsObj)
                .map(k => esc(k) + '=' + esc(paramsObj[k]))
                .join('&');
        }
    }
})(window, document);
module.exports = util;
