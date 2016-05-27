import React, { Component } from 'react';
import { createStore } from 'redux';
import redux01Reducer from '../reducer/redux01';
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFIlters} from '../actions/redux01';

class Redux01 extends Component{

    constructor(props) {
        super(props);
        this.store = createStore(redux01Reducer);
    }

    componentWillMount() {
        console.log('redux01 initial state:', this.store.getState());
    }

    render() {
        return (
            <div>
                <p>This is redux01 demo for testing redux, you can open the console to see more informations.</p>
                <button type="button" onClick={() => {this.addTodo()}}>addTodo</button>
                <button type="button" onClick={() => {this.toggleTodo()}}>toggleTodo</button>
                <button type="button" onClick={() => {this.setVisibilityFilter()}}>setVisibilityFilter completed</button>
                <button type="button" onClick={() => {this.subscribe()}}>subscribe</button>
                <button type="button" onClick={() => {this.unsubscribe()}}>unsubscribe</button>
            </div>
        )
    }

    addTodo() {
        this.store.dispatch(addTodo('test redux'));
    }

    toggleTodo() {
        this.store.dispatch(toggleTodo(0));
    }

    setVisibilityFilter() {
        this.store.dispatch(setVisibilityFilter(VisibilityFIlters.SHOW_COMPLETE));
    }

    subscribe() {
        console.log(this);
        this.unsubscribe = this.store.subscribe(() => {
            console.log(this.store.getState());
        });
    }

    unsubscribe() {
        this.unsubscribe();
    }
}

export default Redux01;
