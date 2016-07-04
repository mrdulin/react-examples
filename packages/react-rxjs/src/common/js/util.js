const Util = (() => {
	return {
	 	getComputedStyleValue: (node, property) => {
			return window.getComputedStyle(node)[property];
		}
				
	}
})();

module.exports = Util;
