import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {selectCity, fetchCity} from '../actions/reactRedux01';
import Form from '../components/reactRedux01Form.react';

class ReactRedux01 extends Component{
    constructor(props) {
        super(props);
    }

    //虽然使用react-redux将state tree上的state注入到组件的props属性上，但是组件内部依旧可以定义自己的defaultProps
    static defaultProps = {
        defaultProps: {
            system: 'ubuntu',
            version: '16.04'
        }
    }

    componentDidMount() {
        // console.log(this.props)
        this.props.dispatch(fetchCity('novaline_12312312313'));
    }

    render() {
        return (
            <div>
                <h2>react-redux api测试_mapStateToProps</h2>
                <Form cityList={this.props.cityList} selectCity={this.props.selectCity} onSelectCity={(e) => this.onSelectCity(e)}></Form>
            </div>
        );
    };

    onSelectCity(e) {
        const cityKey = e.target.value;
        this.props.dispatch(selectCity(cityKey));
    }

}

//[mapStateToProps(state, [ownProps]): stateProps] (Function)
//为connect传入该参数会使组件订阅redux的store的更新。
//任何时候store更新了，mapStateToProps会被调用，它的返回值必须是一个原始对象，这个原始对象会被merge到组件的props属性上。
//如果没有给connect传该参数，组件将不会订阅store的更新。
//state是store中的全局state，我们不一定要把所有的state传入这个组件，一般都是传入需要的state
const mapStateToProps = (state, ownProps) => {
    return {
        selectCity: state.city,
        cityList: state.cityList
    };
};

//connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
//将react组件连接到redux的store，connect方法并没有修改组件class，而是返回一个新的链接好redux的store的组件class

export default connect(
    mapStateToProps
)(ReactRedux01);
