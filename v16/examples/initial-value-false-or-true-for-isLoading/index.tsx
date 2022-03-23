// import React, { useEffect, useReducer } from 'react';

// export const Child = () => {
//   console.count('Child render');
//   return <div>Child</div>;
// };

// const apis = {
//   async getData() {
//     return 'fake data';
//   },
// };
// const dataQueryReducer = (state, action) => {
//   console.log(action);
//   switch (action.type) {
//     case 'GET_DATA':
//       return { ...state, status: 'pending' };
//     case 'GET_DATA_FULFILLED':
//       return { ...state, data: action.payload, status: 'fulfilled' };
//     case 'GET_DATA_REJECTED':
//       return { ...state, data: action.payload, status: 'rejected' };
//     default:
//       return state;
//   }
// };
// const useGetDataQuery = () => {
//   const [state, dispatch] = useReducer(dataQueryReducer, { status: 'idle', data: null });

//   const fetch = () => {
//     dispatch({ type: 'GET_DATA' });
//     apis.getData().then((res) => {
//       dispatch({ type: 'GET_DATA_FULFILLED', payload: res });
//     });
//   };

//   // useEffect(() => {
//   //   dispatch({ type: 'GET_DATA' });
//   //   apis.getData().then((res) => {
//   //     dispatch({ type: 'GET_DATA_FULFILLED', payload: res });
//   //   });
//   // }, []);

//   return { data: state, fetch };
// };

// export const App = () => {
//   const { data, fetch } = useGetDataQuery();
//   return (
//     <div>
//       {data.status === 'pending' && <p>loading...</p>}
//       {data.status === 'fulfilled' && <Child />}
//       <button onClick={fetch}>fetch data</button>
//     </div>
//   );
// };

// // return <div>{data.status ? <p>loading...</p> : <Child />}</div>;

// import './styles.css';

// memory leak
// import React, { useEffect, useReducer, useState } from 'react';

// const apis = {
//   async getData() {
//     return 'fake data';
//   },
//   async getChildData() {
//     console.count('getChildData call');
//     return 'fake child data';
//   },
// };

// const useGetChildDataQuery = () => {
//   const [data, setData] = useState<string>();
//   useEffect(() => {
//     apis.getChildData().then((res) => {
//       setData(res);
//     });
//   }, []);
//   return { data };
// };

// export const Child = () => {
//   const { data } = useGetChildDataQuery();
//   console.count('Child render');
//   return <div>child data: {data}</div>;
// };

// const dataQueryReducer = (state, action) => {
//   console.log(action);
//   switch (action.type) {
//     case 'GET_DATA':
//       return { ...state, isLoading: true };
//     case 'GET_DATA_FULFILLED':
//       return { ...state, data: action.payload, isLoading: false };
//     default:
//       return state;
//   }
// };
// const useGetDataQuery = () => {
//   const [state, dispatch] = useReducer(dataQueryReducer, {
//     isLoading: false,
//     data: null,
//   });

//   useEffect(() => {
//     dispatch({ type: 'GET_DATA' });
//     apis.getData().then((res) => {
//       dispatch({ type: 'GET_DATA_FULFILLED', payload: res });
//     });
//   }, [dispatch]);

//   return { data: state, dispatch };
// };

// export function App() {
//   const { data } = useGetDataQuery();
//   return (
//     <div className="App">
//       <div>{data.isLoading ? <p>loading...</p> : <Child />}</div>
//     </div>
//   );
// }

// final
import React, { useEffect, useReducer, useState } from 'react';

const apis = {
  async getData() {
    return 'fake data';
  },
  async getChildData() {
    console.count('getChildData call');
    return 'fake child data';
  },
};

const useGetChildDataQuery = () => {
  const [data, setData] = useState<string>();
  useEffect(() => {
    apis.getChildData().then((res) => {
      setData(res);
    });
  }, []);
  return { data };
};

export const Child = () => {
  const { data } = useGetChildDataQuery();
  console.count('Child render');
  return <div>child data: {data}</div>;
};

const dataQueryReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'GET_DATA':
      return { ...state, status: 'pending' };
    case 'GET_DATA_FULFILLED':
      return { ...state, data: action.payload, status: 'fulfilled' };
    default:
      return state;
  }
};
const useGetDataQuery = () => {
  const [state, dispatch] = useReducer(dataQueryReducer, {
    status: 'idle',
    data: null,
  });

  useEffect(() => {
    dispatch({ type: 'GET_DATA' });
    apis.getData().then((res) => {
      dispatch({ type: 'GET_DATA_FULFILLED', payload: res });
    });
  }, [dispatch]);

  return { data: state, dispatch };
};

export function App() {
  const { data } = useGetDataQuery();
  return (
    <div className="App">
      <div>
        {data.status === 'pending' && <p>loading...</p>}
        {data.status === 'fulfilled' && <Child />}
      </div>
    </div>
  );
}
