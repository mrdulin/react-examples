import React, {Component} from 'react';

class AjaxInConstructor extends Component{
    constructor() {
        super();
        this.state = {name: '', age: '', content: ''}
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
        }).then((person) => {
            return this.loadBooks().then(data => {
                return Object.assign({}, person, {content: data});
            });
        })
    }

    loadBooks() {
        const url = 'http://it-ebooks-api.info/v1/search/angular';
        return fetch(url).then(res => res.json());
    }

    render() {
        const {name, age, content} = this.state;
        const {Books = []} = content;

        const bookItems = Books.map(book => {
            return <li key={book.ID}>
                <h1>{book.Title}</h1>
                <p>{book.Description}</p>
                <img src={book.Image} alt=''/>  
            </li>
        })

        return <div>
            <p>Can I init component state async?</p>
            <p>name: {name}</p>
            <p>age: {age}</p>
            <ul>
            {bookItems}
            </ul>
        </div>
    }
}

export default AjaxInConstructor;
