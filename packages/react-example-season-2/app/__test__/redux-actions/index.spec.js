import {createAction, handleAction, handleActions} from 'redux-actions';

describe('redux-actions', () => {

  describe('createAction', () => {

    it('createAction with payloadCreator should be return a flux standard action', () => {
      let increment = createAction('INCREMENT', amount => amount);
      expect(increment(42)).toEqual({type: 'INCREMENT', payload: 42});
    });

    it('createAction without payloadCreator should be return a flux standard action', () => {
      let add = createAction('ADD');
      expect(add(22)).toEqual({type: 'ADD', payload: 22});
    });

    it('If the payload is an instance of an Error object, redux-actions will automatically set action.error to true.', () => {
      const increment = createAction('INCREMENT');
      const error = new TypeError('not a number');

      expect(increment(error)).toEqual({type: 'INCREMENT', payload: error, error: true});
    });

    it('should be return an FSA with payload and meta', () => {

      const go = createAction('GO', name => name, (name, desc) => ({name, desc}));
      const action = go('emilie', 'beautifull girl');
      expect(action).toEqual({type: 'GO', payload: 'emilie', meta: {name: 'emilie', desc: 'beautifull girl'}});
    });

    it('should be return an FSA with payload, if metaCreator is not a function or undefined', () => {

      const go = createAction('GO', name => name, 'sdsdf');
      const action = go('emilie', 'beautifull girl');
      expect(action).toEqual({type: 'GO', payload: 'emilie'});

    });

  });

  describe('handleAction', () => {

    it('test - 1', () => {
      const increment = createAction('INCREMENT');

      const incrementReducer = handleAction(increment, {
        next(state, action) {
          const counter = state.counter + action.payload;
          return Object.assign({}, state, {counter});
        },
        throw(state, action) {
          return state;
        }
      }, {counter: 0});

      const error = new Error('error');
      const incrementFailAction = increment(error);

      expect(increment(42)).toEqual({type: 'INCREMENT', payload: 42});
      expect(incrementFailAction).toEqual({type: 'INCREMENT', payload: error, error: true});

      expect(incrementReducer(undefined, increment(42))).toEqual({counter: 42});
      expect(incrementReducer({counter: 58}, increment(42))).toEqual({counter: 100});
      expect(incrementReducer({counter: 111}, incrementFailAction)).toEqual({counter: 111});
    });


  });

  describe('handleActions', () => {

    it('test - 1', () => {
      const increment = createAction('INCREMENT');

      const incrementReducer = handleActions({
        [increment]: (state, action) => {
          if (action.error) {
            return state;
          } else {
            const counter = state.counter + action.payload;
            return Object.assign({}, state, {counter});
          }
        }
      }, {counter: 0});

      const error = new Error('error');
      const incrementFailAction = increment(error);

      expect(increment(42)).toEqual({type: 'INCREMENT', payload: 42});
      expect(incrementFailAction).toEqual({type: 'INCREMENT', payload: error, error: true});

      expect(incrementReducer(undefined, increment(42))).toEqual({counter: 42});
      expect(incrementReducer({counter: 58}, increment(42))).toEqual({counter: 100});
      expect(incrementReducer({counter: 111}, incrementFailAction)).toEqual({counter: 111});

    });

  });
});
