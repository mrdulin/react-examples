import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import IScroll from 'IScroll';
import './style';

export default class extends Component{
    constructor(props) {
        super(props);
        this.state = {
            books: []
        }

        const books = [];
        for(let i = 0; i < 10; i++) {
            books.push('book-' + i);
        }
        this.state.books = books;
    }
    componentDidMount() {
        this._wrapperElement = findDOMNode(this._wrapperRef);
        console.log(this._wrapperElement);
        this._initScroller();
    }

    _initScroller() {
        document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
        this._scroller = new IScroll(this._wrapperElement);
    }

    render() {
        return <div id='iscroll-loadMore'>
            <div className="wrapper" ref={ref => this._wrapperRef = ref}>
                <div className="scroller">
                    <ul className='book-list'>
                        {
                            this.state.books.map((book, index) => <li key={index}>{book}</li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    }
}