import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ActionCreators from '../actions/reactRedux03';

class ReactRedux03 extends Component{
    render() {
        const {book, actions} = this.props;
        return (
            <div>
                <p>book name: {book.name}</p>
                <p>book author: {book.author}</p>
                <button type="button" onClick={() => actions.getBook()}>获取book</button>
                <button type="button" onClick={() => actions.deleteBook()}>删除book</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {book} = state.reactRedux03;
    return {book};
};

const mapDispatchToProps = (dispatch) => {
    return {actions: bindActionCreators(ActionCreators, dispatch)};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReactRedux03);
