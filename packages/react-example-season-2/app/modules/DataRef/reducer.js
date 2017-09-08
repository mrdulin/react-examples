import update from 'immutability-helper';

const initState = {
  root: {
    lv1: {
      lv11: [1, 2, 3]
    },
    lv2: {
      lv21: [1, 1, 1]
    },
    lv3: {
      lv31: [1, 3, 4]
    }
  }
};

export const DataRef = (state = initState, action) => {
  switch (action.type) {
    case 'changeData': {

      // const newState = {...state};
      const newState = update(state, {
        root: {
          lv1: {
            lv11: {
              $set: [3, 4, 5]
            }
          }
        }
      });

      // newState.root = {
      //     lv1:  {
      //         lv2: [5,5,6]
      //     }
      // };

      console.log(state === newState);
      console.log(state.root === newState.root);
      console.log(state.root.lv1 === newState.root.lv1);
      console.log(state.root.lv1.lv11 === newState.root.lv1.lv11);
      console.log(state.root.lv2 === newState.root.lv2);
      console.log(state.root.lv2.lv21 === newState.root.lv2.lv21);

      return newState;
    }
    default:
      return state;
  }
};
