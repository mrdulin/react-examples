/**
 * Created by dulin on 16/7/29.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as Actions from '../actions/InitStateTreeData.action';

class InitStateTreeData extends Component{
    componentWillMount() {
        //验证的问题是,当从当前页面跳转到其他页面,再跳转回来的时候,该页面的state树上的数据是否可以在componentWillMount中初始化的问题
        //例子证明,虽然再次进入该页面的时候执行了componentWillMount方法,也走了initData的action,但是该页面的state树并没有被初始化,
        //state树依旧保持跳转之前的数据
        // this.props.dispatch(Actions.initData());
        // console.log('componentWillMount init data', this.props.page);
    }

    componentDidMount() {
        console.log('current page is ', this.props.page);
    }

    componentWillUnmount() {
        //要在页面跳转的时候初始化该页面的state树,应该放在该方法中
        this.props.dispatch(Actions.initData());
    }

    render() {
        return <div>
            <button type="button" onClick={() => this.addPage()}>addPage</button>
        </div>
    }

    addPage() {
        const page = this.props.page + 1;
        this.props.dispatch(Actions.addPage(page))
    }
}

const mapStateToProps = (state) => {
    return state.InitStateTreeData;
};

export default connect(mapStateToProps)(InitStateTreeData);