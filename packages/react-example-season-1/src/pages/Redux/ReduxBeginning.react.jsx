import React, { Component } from 'react';
import { createStore } from 'redux';
import rootReducer from '../../reducer/index';

class ReduxBeginning extends Component{

    constructor(props, context) {
        super(props, context);
        this.store = createStore(rootReducer);
    }

    componentWillMount() {

    }

    render() {
        return <div>
        
        </div>
    }

    subscribe() {
        this.unsubscribe = this.store.subscribe(() => {
            console.log(this.store.getState());
        });
    }

    unsubscribe() {
        this.unsubscribe();
    }
}

export default ReduxBeginning;
