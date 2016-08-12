import React, {Component} from 'react';

class GrabStateByParentComponent extends Component{
    state = {
        name: 'novaline',
        age: 23,
        sex: 'female',
        job: 'web developer'
    }

    componentWillMount() {
        const fns = {};
        const fnNamesTable = ['fn1', 'fn2', 'setState'];
        for (let fnName of fnNamesTable) {
            fns[fnName] = this[fnName];
        }
        this.props.getChildState(() => this.state);
        this.props.getChildFns(() => fns);

        // setTimeout(() => {
        //     this.setState({name: 'WTF'});
        // }, 2000)
    }

    fn1() {
        console.log('I\'m fn1');
    }

    fn2() {
        console.log('I\'m fn2');
    }

    render() {
        const {name, age, sex, job} = this.state;
        return <div>
            <p>name: {name}</p>
            <p>age: {age}</p>
            <p>sex: {sex}</p>
            <p>job: {job}</p>
        </div>
    }
}

export default GrabStateByParentComponent;
