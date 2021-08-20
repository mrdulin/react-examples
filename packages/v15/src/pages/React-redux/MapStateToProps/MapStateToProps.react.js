import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {selectCity, fetchCity} from '../../../actions/MapStateToProps.action';
import Form from './components/ChildComponent.react';
import {bindActionCreators } from 'redux';

class MapStateToProps extends Component{
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
        this.props.dispatch(fetchCity('novaline_12312312313'));
    }

    render() {
        return (
            <div>
                <h2>react-redux mapStateToProps</h2>
                <Form cityList={this.props.cityList} selectCity={this.props.city} onSelectCity={(e) => this.onSelectCity(e)}></Form>
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
        city: state.city,
        cityList: state.cityList
    };
};

//connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
//将react组件连接到redux的store，connect方法并没有修改组件class，而是返回一个新的链接好redux的store的组件class（被注入了state和action creators的组件）
//connect被调用了两次，第一次调用的参数是mapStateToProps,mapDispatchToProps等，第二次调用是组件class
export default connect(
    mapStateToProps
)(MapStateToProps);
