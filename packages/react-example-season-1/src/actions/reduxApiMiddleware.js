import {CALL_API} from 'redux-api-middleware';

export const REQUEST = 'REQUEST';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAIL = 'REQUEST_FAIL';

export const requestCity = () => {
    const body = JSON.stringify({userId: '12adfaefsa123123sddfs'});
    return {
        [CALL_API]: {
            //endpoint 是接口地址，可以是字符串，也可以是一个函数，返回值是字符串
            //下面是个找不到的接口地址，用来测试请求失败
            // endpoint: ./json/cityMap.api.jso',

            //字符串接口地址
            // endpoint: './json/cityMap.api.json',

            endpoint: () => {
                return './json/cityMap.api.json'
            },

            //method 是http方法动词，字符串类型，这些动词必须是GET,HEAD,POST,PUT,PATCH,DELETE,OPTIONS中的一种
            //这个http方法动词字符串可以是大小写字符任意组合，例如'get','Get','gEt'
            method: 'get',

            //types 必须是一个长度是3的数组，数组中每个元素数据类型必须是字符串，Symbol类型
            types: [REQUEST, REQUEST_SUCCESS, REQUEST_FAIL],

            //body 我们通常称的接口调用的时候向服务器端发送的数据，通常，一般是encode过的json或者
            // body: body

            //http请求头
            // headers: {'Content-Type': 'application/json'}

            //credentials 请求时是否发送cookies
            //`omit`默认值，不发送任何cookie
            //`same-origin`只给当前域名发送cookies
            //`include`始终发送cookies,即使是跨域请求
            // credentials: 'include',

            //有时候，一些你想请求的数据已经在redux的store中缓存了，或是当前用户没有足够的权限发送请求调用接口
            //通过`[CALL_API].bailout`可以告诉`redux-api-middleware`不要取发送请求，如果`bailout`的值为true,则 RSAA会被销毁，没有FSA传入下一个中间件
            //更好的使用方法是给`bailout`指定一个函数，运行时，该函数的唯一参数是redux的store中的state,可以用来进行一些逻辑处理。函数返回值是true，则不会发送请求。
            bailout: (state) => {
                //这里的state是全局state
                console.log('bailout', state)
                // return true;
            }
        }
    }
};

export const login = (formData) => {
    return {
        [CALL_API]: {
            endpoint: './json/login.api.json',
            method: 'post',
            types: [REQUEST, REQUEST_SUCCESS, REQUEST_FAIL],
            body: formData
        }
    }
};

//RSAA的全称是Redux Standard API-calling Actions

//* action没有`[CALL_API]`属性的会被直接传入下一个中间件，不做任何修改
//* action有`[CALL_API]`属性的但是验证RSAA失败的，会得到一个FSA的错误对象

//一个Redux Standard API-calling Actions必须符合：
//* 是一个普通对象
//* 有`[CALL_API]`属性

//一个Redux Standard API-calling Actions禁止：
//* 包含其他属性(只能是[CALL_API]属性)

//`[CALL_API]`中必须有如下属性：
//* 是一个普通对象
//* 有endpoint属性
//* 有method属性
//* 有types属性

//`[CALL_API]`中可以有如下属性：
//* body属性
//* headers属性
//* credentials属性
//* bailout属性

//`[CALL_API]`中禁止：
//* 包含除上述7种属性意外的其他属性


//生命周期
/*
`[CALL_API].types`属性控制`redux-api-middware`的输出。最简单的形式是，types是由3个string类型或symbol类型的元素组成的一个数组。
详细描述如下：

1. 当`redux-api-middware`中间件接收到一个action，它会先检查这个action对象有没有`[CALL_API]`属性。如果没有，
它不会处理这个action，只是将这个action传递给下一个中间件。

2. 如果action有`[CALL_API]`属性，则开始进行RSAA验证。如果验证失败，一个FSA将被dipatch，带有如下属性：
* `type`: `[CALL_API].types`数组第一个元素，如上例中的REQUEST常量
* `payload`: 一个InvalidRSAA对象，包含一个验证错误列表
* `error`: true

验证失败后，`redux-api-middware`中间件不会再往下进行处理，不会创建API请求

3. 如果action验证通过，也就是说这个action是一个标准的RSAA，中间件将会创建API请求，一个请求的FSA将会被dispatch，包含如下属性：

* `type`: [CALL_API].types`数组第一个元素

但是在这个阶段，也有可能抛出错误，几个原因：

* 当`[CALL_API].bailout`，`[CALL_API].endpoint`,`[CALL_API].headers`这些被指定为函数的时候，这些函数内可能会抛出错误
* `isomorphic-fetch`也可能会抛出错误，RSAA定义不足以杜绝任何错误，比如`[CALL_API].body`的值不是fetch specification中允许的json和formData的形式
* 网络导致的错误

当上述的错误发生时，不同的FSA将会被dispatch，包含如下属性：

* `type`: [CALL_API].types`数组第一个元素
* `payload`: 一个包含错误信息的`RequestError`对象
* `error`: true

4. 当中间件从服务器端接收到一个响应，并且status code 在200范围内，一个成功的FSA将会被dispatch，包含如下属性：
* `type`: [CALL_API].types`数组第二个元素，上例中是REQUEST_SUCCESS
* 'payload': 如果响应头的`Content-Type`设置为`json`，则是服务器端返回的解析后的json格式的数据，否则是undefined

如果status code不在200范围，一个失败的FSA将会被dispatch，包含如下属性

* `type`: [CALL_API].types`数组的最后一个元素
* `payload`: 一个包含status和statusText的ApiError对象
* `error`: true







*/
