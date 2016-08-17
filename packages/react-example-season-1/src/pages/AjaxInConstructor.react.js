import React, {Component} from 'react';

class AjaxInConstructor extends Component{
    constructor() {
        super();
        this.state = {name: '', age: ''}
        const loadDataSuccess = data => {
            this.setState(data);
        };
        this.loadData().then(loadDataSuccess);
    }
    loadData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    name: '我去去去去nimabi',
                    age: 123
                });
            }, 2000);
        });
    }
    render() {
        const {name, age} = this.state;
        return <div>
            <p>Can I init component state async?</p>
            <p>name: {name}</p>
            <p>age: {age}</p>
        </div>
    }
}

export default AjaxInConstructor;
