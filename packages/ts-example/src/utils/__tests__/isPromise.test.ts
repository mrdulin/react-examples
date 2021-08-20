/**
 * Created by dulin on 2017/7/6.
 */
import isPromise from '../isPromise';

describe('utils test suites', () => {
  
  describe('isPromise test suites', () => {
    
    it('t-1', () => {
      
      const p = Promise.resolve();
      const actual = isPromise(p);
      expect(actual).toBeTruthy();
      
    });
    
  });
  
});
