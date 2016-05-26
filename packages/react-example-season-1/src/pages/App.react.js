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

        //ES6写法在constructor中初始化state
        this.state = {
            demoKey: ''
        };
    }

    static defaultProps = {
        demoMap: {
            table: '表格',
            form: '表单'
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
                        <select onChange={(e) => this.selectChange(e)}>
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
        console.log(this, e);
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
