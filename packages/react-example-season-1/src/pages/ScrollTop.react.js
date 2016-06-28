import React, {Component} from 'react';
import {getBook} from '../actions/scrollTop.action';
import {connect} from 'react-redux';

class ScrollTop extends Component{
    static defaultProps = {
        selfurl: document.location.href
    }

    componentDidMount() {
        console.log('componentDidMount')
        //需求：刷新滚动到顶部
        //1.无效
        //window.scrollTo(0, 0);

        //2.pc浏览器中有效
        window.setTimeout(() => {
            window.scrollTo(0, 0);
        }, 1);

        this.props.dispatch(getBook('jisuanji'));

    }

    render() {
        return (
            <div id="fucking-container">
                <div style={{position: "fixed", top: 0, width: '100%', backgroundColor: '#fff', borderBottom: '1px solid #ddd'}}>
                    <p>{Math.random()}</p>
                    <div>
                        <button type='button' onClick={() => this.reload(false)}>location.reload(false)</button>
                        <button type='button' onClick={() => this.reload(true)}>location.reload(true)</button>
                        <button type='button' onClick={() => this.replace(this.props.selfurl)}>location.replace()</button>
                    </div>
                </div>
                <ul>
                    {
                        [1,2,3,4,5,6,6,7,7,8].map((el, index) => {
                            return <li style={{height: '300px', borderBottom: '1px solid #ddd'}} key={index}>{el}</li>;
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

const mapStateToProps = (state) => {
    return {
        scrollTop: state.scrollTop
    }
}

export default connect(
    mapStateToProps
)(ScrollTop);
