# 为什么不要使用boolean值作为视图状态模型的值

在日常开发中，视图的一个经典展示逻辑是，API数据加载中时，展示"加载中..."提示，API返回正确数据时，展示依赖此数据的组件，API返回异常数据，展示"加载出错"提示。那么势必要根据一个视图状态模型来判断当前API的数据状态，很多人简单粗暴直接用`isLoading: boolean`来表示，那么来看下这样表示会出现什么问题。(*代码以React视图框架为例*)


```ts
import React, { useEffect, useReducer } from 'react';

export const Child = () => {
  console.count('Child render');
  return <div>Child</div>;
};

const apis = {
  async getData() {
    return 'fake data';
  },
};
const dataQueryReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'GET_DATA':
      return { ...state, isLoading: true };
    case 'GET_DATA_FULFILLED':
      return { ...state, data: action.payload, isLoading: false };
    default:
      return state;
  }
};
const useGetDataQuery = () => {
  const [state, dispatch] = useReducer(dataQueryReducer, { isLoading: false, data: null });

  useEffect(() => {
    dispatch({ type: 'GET_DATA' });
    apis.getData().then((res) => {
      dispatch({ type: 'GET_DATA_FULFILLED', payload: res });
    });
  }, []);

  return { data: state, dispatch };
};

export const App = () => {
  const { data } = useGetDataQuery();
  return <div>{data.isLoading ? <p>loading...</p> : <Child />}</div>;
};
```

代码功能很简单，`apis.getData()` 用来模拟后端接口服务。为了简化代码，不用`redux`等状态管理库，使用`useReducer` hook来演示，`dataQueryReducer`函数来处理`dispatch`的`action`, `state`的初始化状态为`{ isLoading: false, data: null }`。当获取到API数据后渲染`Child`组件，当数据还在加载中，渲染加载中视图`<p>loading...</p>`。一切看起来都是这么自然，那么来看实际运行结果，我在几个关键处打印了日志，日志如下：

```bash
Child render: 1
{ type: 'GET_DATA' }
{ type: 'GET_DATA_FULFILLED', payload: 'fake data' }
Child render: 2
```

可以看到，`Child`组件在获取数据之前就先渲染了一次，这不是我们期望的，严重的还会导致memory leak，后面会说到。有人说，那么把`isLoading`的初始化状态改为`true`就好了，嗯，3处代码关键改动：

```ts
const dataQueryReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    // 1
    // case 'GET_DATA':
      // return { ...state };
    case 'GET_DATA_FULFILLED':
      return { ...state, data: action.payload, isLoading: false };
    default:
      return state;
  }
};
const useGetDataQuery = () => {
  // 2
  const [state, dispatch] = useReducer(dataQueryReducer, { isLoading: true, data: null });

  useEffect(() => {
    // 3
    // dispatch({ type: 'GET_DATA' });
    apis.getData().then((res) => {
      dispatch({ type: 'GET_DATA_FULFILLED', payload: res });
    });
  }, []);

  return { data: state, dispatch };
};
```

看下运行日志:

```bash
{ type: 'GET_DATA_FULFILLED', payload: 'fake data' }
Child render: 1
```

针对这个例子，问题是解决了，但又会出现几个问题：

1. `isLoading`的初始化状态是`true`的前提是组件在mount时调用了API，`apis.getData()`是在`useEffect(() => {}, [])`hook的effect函数中调用，你需要知道API的调用时机来决定`isLoading`的初始化状态，耦合。
2. 如果某天要改为通过响应用户事件调用API，而不是组件mount时调用，此时，`isLoading`的初始化状态应该是`false`，又会出现第一次出现的问题，即`Child`组件在`dispatch` `GET_DATA` action之前渲染了一次。

来看第2点响应用户事件调用API的代码：

```ts
const dataQueryReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'GET_DATA':
      return { ...state, isLoading: true };
    case 'GET_DATA_FULFILLED':
      return { ...state, data: action.payload, isLoading: false };
    default:
      return state;
  }
};
const useGetDataQuery = () => {
  const [state, dispatch] = useReducer(dataQueryReducer, { isLoading: false, data: null });

  const fetch = () => {
    dispatch({ type: 'GET_DATA' });
    apis.getData().then((res) => {
      dispatch({ type: 'GET_DATA_FULFILLED', payload: res });
    });
  };

  return { data: state, fetch };
};

export const App = () => {
  const { data, fetch } = useGetDataQuery();
  return (
    <div>
      {data.isLoading ? <p>loading...</p> : <Child />}
      <button onClick={fetch}>fetch data</button>
    </div>
  );
};
```

当点击button按钮时，运行日志如下：

```bash
Child render: 1
{ type: 'GET_DATA' }
{ type: 'GET_DATA_FULFILLED', payload: 'fake data' }
Child render: 2
```

至此，主要的问题已经说明，解决方法，使用以下四种状态来表达视图状态模型的值，TS类型如下：

```ts
type Status = 'idle' | 'pending' | 'fulfilled' | 'rejected';
```

将`isLoading`字段改为`status`，变量命名更加准确，上述四种状态分别表示：

- `'idle'`：初始化状态
- `'pending'`: API调用正在进行中，网络请求正在`pending`状态
- `'fulfilled'`: API调用已返回，系统正常，业务正常的值
- `'rejected'`: API调用已返回，系统异常或业务异常的值

来看改造后的代码

情景一：当组件mount时调用API

```ts
const dataQueryReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'GET_DATA':
      return { ...state, status: 'pending' };
    case 'GET_DATA_FULFILLED':
      return { ...state, data: action.payload, status: 'fulfilled' };
    case 'GET_DATA_REJECTED':
      return { ...state, data: action.payload, status: 'rejected' };
    default:
      return state;
  }
};
const useGetDataQuery = () => {
  const [state, dispatch] = useReducer(dataQueryReducer, { status: 'idle', data: null });

  useEffect(() => {
    dispatch({ type: 'GET_DATA' });
    apis.getData().then((res) => {
      dispatch({ type: 'GET_DATA_FULFILLED', payload: res });
    });
  }, []);

  return { data: state };
};

export const App = () => {
  const { data } = useGetDataQuery();
  return (
    <div>
      {data.status === 'pending' && <p>loading...</p>}
      {data.status === 'fulfilled' && <Child />}
    </div>
  );
};
```

运行日志：

```bash
{ type: 'GET_DATA' }
{ type: 'GET_DATA_FULFILLED', payload: 'fake data' }
Child render: 1
```

`Child`组件尽在API返回正确数据时渲染，即`data.status === 'fulfilled'`时，符合预期

情景二：响应用户事件调用API

关键代码如下：

```ts
const useGetDataQuery = () => {
  const [state, dispatch] = useReducer(dataQueryReducer, { status: 'idle', data: null });

  const fetch = () => {
    dispatch({ type: 'GET_DATA' });
    apis.getData().then((res) => {
      dispatch({ type: 'GET_DATA_FULFILLED', payload: res });
    });
  };

  return { data: state, fetch };
};

export const App = () => {
  const { data, fetch } = useGetDataQuery();
  return (
    <div>
      {data.status === 'pending' && <p>loading...</p>}
      {data.status === 'fulfilled' && <Child />}
      <button onClick={fetch}>fetch data</button>
    </div>
  );
};
```

当点击button按钮时，运行日志：

```bash
{ type: 'GET_DATA' }
{ type: 'GET_DATA_FULFILLED', payload: 'fake data' }
Child render: 1
```

同样符合预期。

再来看最开始提到的memory leak问题，使用boolean值作为视图状态模型的值，会导致`Child`组件它依赖的API调用之前就会被渲染一次，从而导致memory leak. 这次需要对`Child`组件的代码进行改动：

```ts
import React, { useEffect, useReducer, useState } from "react";

const apis = {
  async getData() {
    return "fake data";
  },
  async getChildData() {
    console.count("getChildData call");
    return "fake child data";
  }
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
  console.count("Child render");
  return <div>child data: {data}</div>;
};

const dataQueryReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "GET_DATA":
      return { ...state, isLoading: true };
    case "GET_DATA_FULFILLED":
      return { ...state, data: action.payload, isLoading: false };
    default:
      return state;
  }
};
const useGetDataQuery = () => {
  const [state, dispatch] = useReducer(dataQueryReducer, {
    isLoading: false,
    data: null
  });

  useEffect(() => {
    dispatch({ type: "GET_DATA" });
    apis.getData().then((res) => {
      dispatch({ type: "GET_DATA_FULFILLED", payload: res });
    });
  }, [dispatch]);

  return { data: state, dispatch };
};

export default function App() {
  const { data } = useGetDataQuery();
  return (
    <div className="App">
      <div>{data.isLoading ? <p>loading...</p> : <Child />}</div>
    </div>
  );
}
```

某天，`Child`组件不再是展示型组件(*presentational component*)，或者说无状态组件(*stateless component*)，它变成了容器型组件(*container component*)，或者说有状态组件(*stateful component*)。从代码看到，`Child`组件内部使用了自定义hook - `useGetChildDataQuery`，用来封装组件生命周期及API调用逻辑。

运行日志：
```bash
Child render: 1
getChildData call: 1
{ type: 'GET_DATA' }
Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
        in Child (created by App)

      75 |   useEffect(() => {
      76 |     apis.getChildData().then((res) => {
    > 77 |       setData(res);
         |       ^
      78 |     });
      79 |   }, []);
      80 |   return { data };
{ type: 'GET_DATA_FULFILLED', payload: 'fake data' }
Child render: 2
getChildData call: 2
Child render: 3
```

warning产生的原因：由于`data.isLoading`的初始化值是`false`，`Child`组件会被渲染，`useGetChildDataQuery` hook会执行，`apis.getChildData()`会被调用，在`apis.getChildData()`返回之前，`{ type: 'GET_DATA' }` action被dispatch，此时`isLoading`在`dataQueryReducer`被设置为`true`，展示`<p>loading...</p>`视图，而`Child`组件实例被unmount，等到`apis.getChildData()`返回，此时`Child`已经被unmount，`setData`无法更新被unmount组件的`state`。

除了warning，初始化时，由于`Child`组件被渲染，`useGetChildDataQuery`hook中的`apis.getChildData()`被调用，将多发送一次HTTP request。

最终使用修正后的代码如下：

```ts
import React, { useEffect, useReducer, useState } from "react";

const apis = {
  async getData() {
    return "fake data";
  },
  async getChildData() {
    console.count("getChildData call");
    return "fake child data";
  }
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
  console.count("Child render");
  return <div>child data: {data}</div>;
};

const dataQueryReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "GET_DATA":
      return { ...state, status: "pending" };
    case "GET_DATA_FULFILLED":
      return { ...state, data: action.payload, status: "fulfilled" };
    default:
      return state;
  }
};
const useGetDataQuery = () => {
  const [state, dispatch] = useReducer(dataQueryReducer, {
    status: "idle",
    data: null
  });

  useEffect(() => {
    dispatch({ type: "GET_DATA" });
    apis.getData().then((res) => {
      dispatch({ type: "GET_DATA_FULFILLED", payload: res });
    });
  }, [dispatch]);

  return { data: state, dispatch };
};

export function App() {
  const { data } = useGetDataQuery();
  return (
    <div className="App">
      <div>
        {data.status === "pending" && <p>loading...</p>}
        {data.status === "fulfilled" && <Child />}
      </div>
    </div>
  );
}
```

运行日志：

```bash
{ type: 'GET_DATA' }
{ type: 'GET_DATA_FULFILLED', payload: 'fake data' }
Child render: 1
getChildData call: 1
Child render: 2
```

