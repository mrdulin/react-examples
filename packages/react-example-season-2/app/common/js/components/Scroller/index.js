import IScroll from 'IScroll';
import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';

import './style';

/**
 * @desc React封装的IScroll组件
 *
 * @param {Number} top 绝对定位top
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
    }

    componentWillMount() {
        document.addEventListener('touchmove', this._preventTouchDefault, false);
    }

    componentDidMount() {
        this._init(this._wrapperElement);
    }

    componentWillReceiveProps(nextProps) {
        // console.log('componentWillReceiveProps', nextProps.children, this.props.children);
        const {children, top, distance, hasMore} = this.props;
        //处理父组件异步过来的children
        if(nextProps.children !== children && nextProps.children) {
            this._refreshScroller();
        }

        if(nextProps.hasMore !== hasMore || nextProps.distance !== distance) {
            this._updateOptions({
                hasMore: nextProps.hasMore,
                distance: nextProps.distance
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
        console.log(this._scroller, this._wrapperElement);
    }

    _preventTouchDefault(e) {
        e.preventDefault();
    }

    _updateOptions(opts) {
        this._scroller.distance = Number.parseInt(opts.distance || this._distance, 10);
        this._scroller.hasMore = opts.hasMore || this._hasMore;
    }

    _init(el) {
        const {distance, onInfinite, hasMore} = this.props;
        this._scroller = new IScroll(el);
        this._scroller.onInfinite = onInfinite || this._onInfinite;
        this._updateOptions({distance, hasMore});
        this._scroller.on('scrollEnd', this._handleScrollEnd.bind(this, this._scroller));
    }

   _handleScrollEnd(scroller) {
       if(this.state.isLoading) return;
        const maxScrollY = Math.abs(scroller.maxScrollY);
        const y = Math.abs(scroller.y);
        const distance = scroller.distance;
        console.log(maxScrollY, y, distance);
        if(this._reachBottom({maxScrollY, y, distance}) && scroller.hasMore){
            this.setState({isLoading: true});
            scroller.onInfinite(() => {
                this.setState({isLoading: false});
                this._refreshScroller();
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

    render() {
        const {children, top} = this.props;

        return <div className='scroller-wrapper' ref={ref => this._wrapperElement = ref} style={{top: `${top}px`}}>
            <div className='scroller-content'>
                {children}
            </div>
        </div>
    }
}

Scroller.propTypes = {
    top: React.PropTypes.number,
    distance: React.PropTypes.number,
    onInfinite: React.PropTypes.func,
    hasMore: React.PropTypes.bool
}

export default Scroller;
