import React, {Component} from 'react';
import * as Action from '../../actions/TestApiMiddleware.action';
import {connect} from 'react-redux';

class TestApiMiddleware extends Component{
    constructor() {
        super();
        this.handleSearch = ::this.handleSearch;
    }
    render() {
        const {TestApiMiddleware} = this.props;
        const bookItems = TestApiMiddleware.Books.map(book => {
            return <li key={book.ID}>{book.Title}</li>
        });
        return <div>
            <form onSubmit={this.handleSearch}>
                <label>
                    <input type="search" placeholder='输入书名' name='search' />
                </label>
            </form>
            <ul>
                {bookItems}
            </ul>
        </div>
    }

    handleSearch(e) {
        e.preventDefault();
        const {dispatch} = this.props;
        const form = e.target;
        const value = form.search.value.trim();
        dispatch(Action.fetchBook(value));
    }
}

const mapStateToProps = state => ({
    TestApiMiddleware: state.TestApiMiddleware
})
export default connect(mapStateToProps)(TestApiMiddleware);