import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from '../../reducer';
import * as Action from '../../actions/CheckDataInStateAndNewCreateStoreStateIsSameWhenDispatchAction.action';

class CheckDataInStateAndNewCreateStoreStateIsSameWhenDispatchAction extends Component{
    constructor() {
        super();
        this.updateFoodName = ::this.updateFoodName;
        this.store = createStore(rootReducer);
    }
 
    render() {
        const {CDSANCSSSWDA} = this.props;
        return <div>
            <p>问题：</p>
            <p>在应用路由处通过Provider注入的store和在组建内部通过createStore再次创建的store，在dispatch一个action后，两个store中的数据是否同步变化？</p>
            <p>如果不能同步，怎样同步？</p>
            <hr/>
            <p>视图：</p>
            <form onSumit={this.updateFoodName}>
                <div>
                    <label htmlFor="foodname">食物名：</label>
                    <input type="text" defaultValue={CDSANCSSSWDA.name} name='foodname' id='foodname' autoComplete='off'/>
                </div>
                <button type='submit' onClick={this.updateFoodName}>更新名字</button>
            </form>
            <hr/>
            <p>数据：</p>
            <div>
                state inject by react-redux connect HOC: <pre>{JSON.stringify(CDSANCSSSWDA, null, 4)}</pre>
            </div>
            <div>
                state create by redux createStore: <pre>{JSON.stringify(this.store.getState().CDSANCSSSWDA, null, 4)}</pre>
            </div>
            <hr/>
            <p>结论：</p>
            <p>dispatch一个action后，两个store中的数据不会同步变化。store1.dispatch和store2.dispatch是不同的，store自己的dispatch方法，当然只会改变自己的数据。</p>
            <p>其实相当于两个对象，有相同的数据和方法，但终究是两个不同的引用。</p>
            <p>要是一个Action在两个store上产生效果，分别调用store自己的dispatch，dispatch这个action即可</p>
            <p>两个store使用了同一个reducer，其实相当于两个store具有相同的state树数据结构。</p>
        </div>
    }

    updateFoodName(e) {
        e.preventDefault();
        const {dispatch} = this.props;
        const foodnameInput = e.target.form.foodname;
        dispatch(Action.updateFoodName(foodnameInput.value));
        //在新建的store上dispatch action
        // this.store.dispatch(Action.updateFoodName(foodnameInput.value));
    }
}

const mapStateToProps = state => ({CDSANCSSSWDA: state.CDSANCSSSWDA});
export default connect(mapStateToProps)(CheckDataInStateAndNewCreateStoreStateIsSameWhenDispatchAction);