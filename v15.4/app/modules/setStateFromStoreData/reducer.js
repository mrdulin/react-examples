export default function personReducer(state = {
  name: 'novaline',
  age: 29,
  sex: 'male'
}, action) {
  switch (action.type) {
    case 'ADD_INFO': {
      return Object.assign({}, state, {country: 'China'});
    }
    default:
      return state;
  }
}
