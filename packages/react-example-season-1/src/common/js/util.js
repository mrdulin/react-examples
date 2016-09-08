export const util = ((window, document) => {
    
    return {
        openweatherApiHost: 'http://api.openweathermap.org/data/2.5',
        openweatherApiKey: '2c36facc61cd4ec7543be24d6a7d0509',
        
        getImgNaturalSize: (imageElement) => {
            const img = document.createElement('img');
            const size = {width: '', height: ''};
            if(typeof img.naturalWidth !== 'undefined') {
                size.width = imageElement.naturalWidth;
                size.height = imageElement.naturalHeight;
            } else {
                img.src = imageElement.src;
                size.width = img.width;
                size.height = img.height;
            }
            return size;
        },

        getTransitionEvent: () => {
            const el = document.createElement('test');
            const transitions = {
                'transition':'transitionend',
                'OTransition':'oTransitionEnd',
                'MozTransition':'transitionend',
                'WebkitTransition':'webkitTransitionEnd'
            }

            for(let t in transitions) {
                if(typeof el.style[t] !== 'undefined') {
                    return transitions[t];
                }
            }
        },

        makeActionCreator: (type, ...propertykeys) => {
            return (...propertyValues) => {
                let action = {type};
                propertykeys.forEach((el, index) => {
                    action[propertykeys[index]] = propertyValues[index];
                });
                return action;
            };
        }
    }
})(window, document);