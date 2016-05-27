import React, { Component } from 'react';
import { createStore } from 'redux';
import redux01Reducer from '../reducer/redux01';
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFIlters} from '../actions/redux01';

let store = createStore(redux01Reducer);

console.log('redux01 initial state:', store.getState());

let unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

class Redux01 extends Component{
    render() {
        return (
            <div>
                <p>This is redux01 demo for testing redux, you can open the console to see more informations.</p>
                <button type="button" onClick={() => {this.addTodo()}}>addTodo</button>
                <button type="button" onClick={() => {this.toggleTodo()}}>toggleTodo</button>
            </div>
        )
    }

    addTodo() {
        store.dispatch(addTodo('test redux'));
    }

    toggleTodo() {
        store.dispatch(toggleTodo(0));
    }
}

export default Redux01;
