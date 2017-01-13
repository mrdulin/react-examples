import IScroll from 'IScroll';
import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';

// console.log(IScroll);

import './style';

const LoadMore = ({show, text}) => {
    if(!show) return null;
    return  <div className='scroller-infinite-text'>
        <i className='scroller-loader'></i>
        <span>{text}</span>
    </div>
}

/**
 * @desc React封装的IScroll组件
 *
 * @param {Number} top 绝对定位top
 * @param {Number} bottom 绝对定位bottom
 * @param {Number} distance 距离底部的距离，达到这个值时触发onInfinite函数, 默认:50px
 * @param {Function} onInfinite 当滚动到底部后执行的函数
 * @param {Boolean} hasMore 是否有更多加载项
 */

class Scroller extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        }

        this._scroller = null;
        this._wrapperElement = null;
        this._distance = 50;
        this._onInfinite = () => {console.log('load more');};
        this._hasMore = false;
        this._el = null;

        this._opts = {
            bounce: true,
            freeScroll: false,
            momentum: true,
            click: true,
            scrollY: true,
            scrollX: false
        };
    }

    componentWillMount() {
        document.addEventListener('touchmove', this._preventTouchDefault, false);
    }

    componentDidMount() {
        this._init(this._wrapperElement);
    }

    componentWillReceiveProps(nextProps) {
        const {children, top, distance, hasMore, toEl} = this.props;
        //处理父组件异步过来的children
        if(nextProps.children !== children && nextProps.children) {
            this._refreshScroller();
        }

        if(nextProps.hasMore !== hasMore || nextProps.distance !== distance || nextProps.toEl !== toEl) {
            console.log('componentWillReceiveProps', nextProps.toEl);
            this._updateProperties({
                hasMore: nextProps.hasMore,
                distance: nextProps.distance,
                toEl: nextProps.toEl
            });
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        // console.log('shouldComponentUpdate', nextProps.children, this.props.children);
        return true;
    }

    componentWillUnmount() {
        document.removeEventListener('touchmove', this._preventTouchDefault);
        this._destroy();
    }

    _destroy() {
        if(this._scroller) {
            this._scroller.destroy();
            this._scroller = null;
        }
        this._wrapperElement = null;
        this._el = null;
        console.log(this._scroller, this._wrapperElement, this._el);
    }

    _preventTouchDefault(e) {
        e.preventDefault();
    }

    _updateProperties({distance, hasMore, toEl}) {
        this._scroller.distance = Number.parseInt(distance || this._distance, 10);
        this._scroller.hasMore = hasMore || this._hasMore;
        if(toEl) {
            const el = this._el = document.querySelector(toEl);
            if(!el) return console.error('找不到scrollToElement需要的element');
            el && this._scroller.scrollToElement(el);
        }
    }

    _init(el) {
        const {distance, onInfinite, hasMore, options = {}, toEl} = this.props;
        const opts = Object.assign(this._opts, options);
        this._scroller = new IScroll(el, opts);
        this._scroller.onInfinite = onInfinite || this._onInfinite;
        console.log(distance, hasMore, toEl);

        this._updateProperties({distance, hasMore, toEl});
        this._bindEvent();
    }

    _bindEvent() {
        this._scroller.on('scrollEnd', this._handleScrollEnd.bind(this, this._scroller));
    }

   _handleScrollEnd(scroller) {
       if(this.state.isLoading) return;
        const maxScrollY = Math.abs(scroller.maxScrollY);
        const y = Math.abs(scroller.y);
        const distance = scroller.distance;

        console.log(maxScrollY, y, distance);
        if(this._reachBottom({maxScrollY, y, distance}) && scroller.hasMore){
            this.setState({isLoading: true}, this._refreshScroller);
            scroller.onInfinite(() => {
                this.setState({isLoading: false}, this._refreshScroller);
            });
        }
    }

    _reachBottom({maxScrollY, y, distance}) {
        if(y === 0) return false;
        return maxScrollY - y < distance;
    }

    _refreshScroller() {
        setTimeout(() => {
            this._scroller.refresh();
        }, 100)
    }

    get loadMoreText() {
        return this.state.isLoading ? '正在加载' : '加载更多';
    }

    render() {
        console.count('scroller render count');
        const {children, top = 0, bottom = 0} = this.props;

        return <div className='scroller-wrapper' ref={ref => this._wrapperElement = ref} style={{top: `${top}px`, bottom: `${bottom}px`}}>
            <div className='scroller-content'>
                {children}
                <LoadMore show={this.state.isLoading} text={this.loadMoreText}></LoadMore>
            </div>
        </div>
    }
}

Scroller.propTypes = {
    top: React.PropTypes.number,
    bottom: React.PropTypes.number,
    distance: React.PropTypes.number,
    onInfinite: React.PropTypes.func,
    hasMore: React.PropTypes.bool
}

export default Scroller;
