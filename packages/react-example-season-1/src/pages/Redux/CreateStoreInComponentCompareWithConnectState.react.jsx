import React, {Component} from 'react';
import {createStore} from 'redux';
import rootReducer from '../../reducer';
import {connect} from 'react-redux'; 

class CreateStoreInComponentCompareWithConnectState extends Component{
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return <div>
            <p>使用createStore再次创建的store通过getState()获取到的state是一份新的引用。不与任何现有的state引用相同。</p>
        </div>
    }
}

const mapStateToProps = state => {
    const store = createStore(rootReducer);
    console.assert(store.getState() === state, 'store.getState()与mapStateToProp中的state是同一个引用');
    return {state};
}
export default connect(mapStateToProps)(CreateStoreInComponentCompareWithConnectState);