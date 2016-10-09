import React, {Component} from 'react';
import {getBook} from '../../actions/scrollTop.action';
import {connect} from 'react-redux';

class ScrollTop extends Component{
    static defaultProps = {
        selfurl: document.location.href
    }

    componentDidMount() {
        // console.log('componentDidMount')
        //需求：刷新滚动到顶部
        //1.无效
        //window.scrollTo(0, 0);

        //2.pc浏览器中有效
        window.setTimeout(() => {
            window.scrollTo(0, 0);
        }, 1);

        this.props.dispatch(getBook('react'));
    }

    handleSearch = e => {
        e.preventDefault();
        this.props.dispatch(getBook(this.input.value.trim()));
    }

    render() {
        const {books} = this.props.scrollTop;
        return (
            <div id="fucking-container">
                <div style={{position: "fixed", top: 0, width: '100%', backgroundColor: '#fff', borderBottom: '1px solid #ddd', zIndex: 100}}>
                    <p>{Math.random()}</p>
                    <div>
                        <button type='button' onClick={() => this.reload(false)}>location.reload(false)</button>
                        <button type='button' onClick={() => this.reload(true)}>location.reload(true)</button>
                        <button type='button' onClick={() => this.replace(this.props.selfurl)}>location.replace()</button>
                    </div>
                </div>
                <div>
                    <form onSubmit={this.handleSearch}>
                        <div>
                            <label>
                                <input ref={ref => this.input = ref} className="search" type="search" placeholder="输入书名搜索"/>
                            </label>
                        </div>
                        <input type='submit' value='搜索'/>
                    </form>
                </div>
                <ul>
                    {
                        books.map((book, index) => {
                            return <li style={{borderBottom: '1px solid #ddd', padding: '10px'}} key={index}>
                                <h3>{book.Title}</h3>
                                <h4>{book.SubTitle}</h4>
                                <img style={{maxWidth: '100%'}} src={book.Image}/>
                                <p>ISBN: <span>{book.isbn}</span></p>
                                <p>{book.Description}</p>
                            </li>;
                        })
                    }
                </ul>
            </div>
        );
    }

    reload(forcedReload) {
        document.location.reload(forcedReload);
    }

    replace(url) {
        document.location.replace(url);
    }
}

const mapStateToProps = (state) => ({
        scrollTop: state.scrollTop
    })

export default connect(
    mapStateToProps
)(ScrollTop);
