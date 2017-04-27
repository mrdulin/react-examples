import {objKeyToLowerCase} from '../bookModuleByName.js';

describe('reducer - bookModuleByName', () => {

  describe('objKeyToLowerCase', () => {

    it('should transform keys of object to lowercase - 1', () => {

      const obj = {
        Title: 'react',
        Descrition: 'react is awesome'
      };

      const result = objKeyToLowerCase(obj);

      expect(result).toEqual({title: 'react', descrition: 'react is awesome'});
      expect(result).toBe(obj);

    });

    it('should transform keys of object to lowercase - 2', () => {

      const obj = {};

      const result = objKeyToLowerCase(obj);

      expect(result).toEqual({});

    });

  });

});
