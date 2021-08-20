const initState = {
  key1: '',
  key2: ''
};

export const RouterHOC = (state = initState, action) => {
  switch (action.type) {
    case 'RouterHOC_action1':
      return Object.assign({}, state, {key1: '1123'});
    case 'RouterHOC_action2':
      return Object.assign({}, state, {key2: 23233});
    default:
      return state;
  }
}
