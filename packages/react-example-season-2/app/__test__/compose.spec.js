import {compose} from 'redux';

function replaceUnit(val, unit) {
	return val.replace(unit, '');
}

function toInt(val) {
	return Number.parseInt(val, 10) || 0;
}

describe('redux - compose', () => {

	it('should handle two function', () => {

		const height = '128px';

		const getIntHeight = compose(toInt, replaceUnit);

		const result = getIntHeight(height);

		expect(result).toBe(128);

	});

	it('should return a function if there is no arguments', () => {

		const result = compose();

		expect(result).toBeInstanceOf(Function);
		expect(result(123)).toBe(123);

	});

	it('should return a function if pass a function to it', () => {

		const result = compose(toInt);
		expect(result).toBeInstanceOf(Function);
		expect(result('100')).toBe(100);

	});

});
