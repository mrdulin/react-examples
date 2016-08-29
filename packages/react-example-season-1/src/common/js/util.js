const util = ((window, document) => {
    
    return {
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
        }
    }
})(window, document);