require('babel-polyfill');
// export default new Promise(resolve => resolve(data));

export default async function() {
	return await new Promise((resolve, reject) => {
		window.setTimeout(function() {
			resolve({name: 'novaline', age: 23});
		}, 2000)
	}) 
}