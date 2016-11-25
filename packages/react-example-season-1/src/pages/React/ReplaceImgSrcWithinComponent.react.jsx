import React, {Component} from 'react';

class Child extends Component{
    constructor() {
        super();
        this.state = {
            html: `
            <a href="http://www.google.com"><img src="http://placehold.it/300x200" alt="info" title='父元素有a标签'/></a>
            <img src="http://placehold.it/300x300" alt="info" title='父元素没有a标签'/>
            `
        }
    }

    handleClick(e) {
        const node = e.target;
        const {open} = this.props;
        if(node.nodeName === 'IMG' && !node.closest('a')) {
            open && open(node.src);
        } 
        if(node.nodeName === 'A') {
            const href = node.getAttribute('href');
            if(href && href.indexOf('http') !== -1) {
                window.location.href = href;
            }
        }
        
    }
    render() {
        return <div onClick={(e) => this.handleClick(e)} dangerouslySetInnerHTML={{__html: this.state.html}}>
        </div>
    }
}

export default class extends Component{
    constructor() {
        super();
        this.state = {
            open: false
        }
    }
    render() {
        console.count('parent render');
        return <div id='ReplaceImgSrcWithinComponent'>
            <p>
            需求：服务器端拿到富文本，通过dangerouslySetInnerHTML插入，点击图片，如果图片的父元素有a标签，并且配置了链接，则跳转链接。
            否则弹出图片弹层，可以对图片进行缩放。
            </p>
            <p>解决方案：通过在富文本的父元素上绑定click事件，通过事件冒泡及element.closest()方法，判断img标签父元素是否是a标签。</p>
            <Child open={src => this.open(src)}></Child>
            <div className='mask' style={{display: this.state.open ? 'flex' : 'none'}} onClick={() => this.setState({open: false})}>
                <img id='zoom-img' src="" alt="zoom-img"/>
            </div>
        </div>
    }

    open(src) {
        this.setState({open: true});
        this.src = src;
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.open) {
            const img = document.getElementById('zoom-img');
            img.src = this.src;
            /**
             * 初始加载图片时，图片已经被浏览器缓存。
             * 因此再次将已经缓存的图片的src赋值给某个img标签，浏览器不会再次下载。
             *  */
            
            img.onload = () => {
                console.log('img onload');
            }
        }
    }
}