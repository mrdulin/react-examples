import {compose} from 'redux';

function replaceUnit(val, unit) {
  return val.replace(unit, '');
}

function toInt(val) {
  return Number.parseInt(val, 10) || 0;
}

describe('redux - compose', () => {

  it('test-1', () => {

    const height = '128px';

    const getIntHeight = compose(toInt, replaceUnit);

    const result = getIntHeight(height);

    expect(result).toBe(128);

  });

});
