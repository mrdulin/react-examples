import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../../reducer/index';
import * as Action from '../../actions/AsyncActionInComponentWillReceiveProps.action';
import thunk from 'redux-thunk';

class ReduxBeginning extends Component{

    constructor(props, context) {
        super(props, context);
        const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
        this.store = createStoreWithMiddleware(rootReducer);
        this.state = {
            cityMap: {}
        }
    }

    componentWillMount() {
        this.unsubscribe = this.store.subscribe(() => {
            console.log(this.store.getState());
        });
    }

    componentDidMount() {
        this.store.dispatch(Action.fetchCity()).then(store => {
            this.setState({cityMap: store.AsyncActionInCWRP.cityMap});
        })
    }

    render() {
        console.count('AsyncActionInComponentWillReceiveProps render');
        const {cityMap} = this.state;
        const cityItems = Object.keys(cityMap).map(cityKey => {
            return <li key={cityKey}>{cityMap[cityKey]}</li>
        })
        return <div>
            <p>视图:</p>
            <ul>{cityItems}</ul>
            <hr/>
            <p>结论：</p>
            <ol>
                <li>直接createStore得到的store是不能dispatch异步action的，只能dispatch同步的action。dispatch异步action需要使用中间件，这里直接使用redux-thunk中间件。</li>
                <li>redux的store.dispatch(action)，返回值是被dispatch的action对象。</li>
            </ol>
        </div>
    }

    componentWillUnmount() {
        this.unsubscribe();
    }
}

export default ReduxBeginning;
