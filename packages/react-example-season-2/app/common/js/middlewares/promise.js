export default store => next => action => {
  let result = next(action);
  return Promise.resolve(store.getState());
};
