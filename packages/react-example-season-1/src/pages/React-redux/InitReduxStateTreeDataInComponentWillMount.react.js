import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as Actions from '../../actions/InitReduxStateTreeDataInComponentWillMount.action';

class InitReduxStateTreeDataInComponentWillMount extends Component{
    componentWillMount() {
        this.props.dispatch(Actions.initState());
    }

    componentWillUnmount() {
        // this.props.dispatch(Actions.initState());
    }

    render() {
        const {page, books} = this.props;
        return <div>
            <p>视图:</p>
            <ul>
            {
                books.map((book, index) => <li key={index}>{book} <span style={{cursor: 'pointer'}} onClick={e => this.handleDelete(e, index)}>-</span></li>)
            }
            </ul>
            <p>当前页：{page}</p>
            <button type="button" onClick={() => this.addPage()}>addPage</button>
            <Link to={'/react-redux'}>跳转到分类首页</Link>
            <hr/>
            <p>数据:</p>
            <p>this.props.page: {page}</p>
            <div>this.props.books：<pre><code>{JSON.stringify(books, null, 4)}</code></pre></div>
            <hr/>
            <p>验证结果：</p>
            <p>初始化redux的state树数据，单考虑实现，在componentWillMount和componentWillUnmount生命周期中都可以。</p>
        </div>
    }

    handleDelete(e, index) {
        this.props.dispatch(Actions.deleteBook(index));
    }

    addPage() {
        const page = this.props.page + 1;
        this.props.dispatch(Actions.addPage(page))
    }
}

const mapStateToProps = (state) => {
    return state.InitReduxStateTreeDataInComponentWillMount;
};

export default connect(mapStateToProps)(InitReduxStateTreeDataInComponentWillMount);