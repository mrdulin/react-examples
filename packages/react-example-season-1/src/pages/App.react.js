import React from 'react';
import {browserHistory} from 'react-router';

class App extends React.Component{

    //ES6语法使用getInitialState会报如下错误,ES5使用这个方法初始化state是可以的
    //Warning: getInitialState was defined on App, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?
    // getInitialState() {
    //     return {
    //         selectDemoKey: 'table'
    //     };
    // }

    constructor(props) {
        super(props);
        // console.log(this.props);
        // let routeName = this.props.location.pathname.replace('/', '') || '';
        let routeName = this.props.routes[this.props.routes.length - 1].path || '';
        //ES6写法在constructor中初始化state
        this.state = {
            demoKey: routeName
        };
    }

    static defaultProps = {
        demoMap: {
            table: '表格',
            form: '表单',
            todoList: 'todoList',
            'react-router01/1?name=novaline&age=26': '如何获取url中的?s=xxx&page=2查询字符串',
            'react-router02': '离开当前路由时，弹出提示',
            'react-router03': '路由跳转3种方式',
            redux01: 'redux测试',
            redux02: 'redux异步action测试',
            'react-redux01': 'api_mapStateToProps测试',
            'react-redux02': 'api_inject-state-and-all-action-creators测试',
            'react-redux03': 'api_inject-state-and-all-action-creators-as-actions测试',
            'redux-api-middware': 'redux-api-middware测试',
            ref_callback_attribute: 'ref_callback_attribute',
            'stateless-functional-component': '无状态函数组件',
            'countDown': '倒计时',
            'xScroll': 'xScroll组件',
            'react-china-questions': 'React-China各种问题解决demo',
            'scrollTop': '测试scrollTop',
            'ios-scroll-event': 'ios-scroll-event阻塞测试',
            'loop-scroll': '无缝滚动',
            'modal-input': 'ios设备第三方输入法键盘弹出模态框位置问题',
            'filter': 'filterBar',
            'dynamic-inline-style': '动态行内样式',
            'PassAsyncDataToChildComponent': '组件获取异步数据更新问题',
            'redux03-middleware': 'redux中间件',
            'array-dom': '将模板放在数组中渲染',
            'changeStateTreeRefData': '能否更改state上引用类型数据',
            initStateTreeData: '在什么时机初始化state树上的数据有效',
            downloadAll: 'a标签批量下载组件',
            MobileInputFocusAndKeyboard:  '移动端input变成方式聚焦时，虚拟键盘状态测试',
            audio: 'audio api测试',
            iframe: '添加iframe',
            GrabChildComponentState: '在父组件中获取子组件的state',
            AjaxInConstructor: '在constructor中ajax',
            hoc: 'High-Order-Component高阶组件',
            inheritComponent: '组件继承',
            composableComponent: '组件组合',
            'function-bind': 'ES7函数绑定',
            'ReactChildren': '测试React.Children上的方法',
            'ios-input-focus': 'ios设备下input focus后, position: fixed失效问题',
            'async-action-in-componentWillReceiveProps': '在componentWillReceiveProps中dispatch异步action'
        }
    }

    render() {
        let demoKeys = Object.keys(this.props.demoMap);
        const options = demoKeys.map((key) => {
            return <option value={key} key={key}>{this.props.demoMap[key]}</option>;
        });

        return (
            <div id="app">
                <h1>welcome to React examples app.</h1>
                <form>
                    <label>
                        选择demo:
                        {/*select可以通过react提供的value属性来指定选择的option，而不用在option上使用selected属性*/}
                        <select onChange={(e) => this.selectChange(e)} value={this.state.demoKey}>
                            <option value=''>-- 请选择demo --</option>
                            {options}
                        </select>
                    </label>
                </form>
                {this.props.children || 'You can select a demo.'}
            </div>
        );
    }

    selectChange(e) {
        // console.log(this, e);
        let value = e.target.value;
        this.setState({demoKey: value});
        //如果使用browserHistory.push(`/#/${value}`);不回报错，并且url的路由也会改变，react-router不会匹配到这个路由，所以相应的component不会加载
        //下面的也可以使用browserHistory.push(`/${value}`);
        browserHistory.push(`${value}`);
    }
};

//如果某个component没有export，则会报下面错误，比如Table.react.js中没有export任何东西;
//Warning: Failed propType: Invalid prop `component` supplied to `Route`
//Warning: [react-router] Invalid undefined `component` supplied to `Route`.
App.propTypes = {
    children: React.PropTypes.node,
    demoMap: React.PropTypes.object
};

export default App;
