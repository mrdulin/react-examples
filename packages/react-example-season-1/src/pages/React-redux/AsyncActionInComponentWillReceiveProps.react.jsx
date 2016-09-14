import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as Action from '../../actions/AsyncActionInComponentWillReceiveProps.action';
import bindActions from '../../actions/';

class AsyncActionInComponentWillReceiveProps extends Component{

    state = {
        count: 2
    }

    componentDidMount() {
        const {dispatch, AsyncActionInCWRP} = this.props;
        dispatch(Action.fetchCity());
        console.log(bindActions);
    }

    componentWillReceiveProps(nextProps) {
        const {dispatch, AsyncActionInCWRP} = nextProps;
        const {cityMap} = AsyncActionInCWRP;
        console.count('AsyncActionInComponentWillReceiveProps componentWillReceiveProps');

        console.log(this.props.AsyncActionInCWRP === nextProps.AsyncActionInCWRP)

        //在componentWillReceiveProps中不加条件或者条件永远成立的dispatch将会导致死循环。
        // dispatch(Action.fetchCity())

        if(this.state.count > 1) {
            dispatch(Action.fetchCity()).then(store => {
                this.setState({count: this.state.count - 1});
            })
        }
    }

    render() {
        console.count('AsyncActionInComponentWillReceiveProps render');
        const {AsyncActionInCWRP} = this.props;
        const {cityMap} = AsyncActionInCWRP;
        const cityItems = Object.keys(cityMap).map(cityKey => {
            return <li key={cityKey}>{cityMap[cityKey]}</li>
        })
        return <div>
            <p>视图：</p>
            <ul>{cityItems}</ul>
            <hr/>
            <p>结论：</p>
            <ol>
                <li>在componentWillReceiveProps中，this.props === nextProps - <i>false</i></li>
                <li>this.props上的所有引用类型的数据和nextProps上的引用类型的数据不相等</li>
                <li>在componentWillReceiveProps中，this.props.dispatch和nextProps..dispatch是两个不同的引用地址。</li>
                <li>在componentWillReceiveProps中不加条件或者条件永远成立的dispatch将会导致死循环。</li>
            </ol>
        </div>
    }
}

const mapStateToProps = state => ({AsyncActionInCWRP: state.AsyncActionInCWRP})
export default connect(mapStateToProps)(AsyncActionInComponentWillReceiveProps);