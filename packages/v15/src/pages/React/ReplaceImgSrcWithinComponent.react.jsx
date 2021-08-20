import React, { Component } from 'react';

class Child extends Component {
    constructor() {
        super();
        this.state = {
            html: `
            <a href="http://www.baidu.com"><img src="http://placehold.it/300x200" alt="info" title='父元素有a标签'/></a>
            <img src="http://placehold.it/300x300" alt="info" title='父元素没有a标签'/>
     
            `,
            realworldHtml: `
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<p><strong><img alt="" src="http://static.test.pajkdc.com/v1/tfs/T1stKTB4CT1R4cSCrK.png" data-src="http://static.test.pajkdc.com/v1/tfs/T1stKTB4CT1R4cSCrK.png" style="width: 100%;" class="img-lazyload" data-lazyloadflag="1"><img alt="" src="http://static.test.pajkdc.com/v1/tfs/T1jaKTBCAT1R4cSCrK.png" data-src="http://static.test.pajkdc.com/v1/tfs/T1jaKTBCAT1R4cSCrK.png" style="width: 100%;" class="img-lazyload" data-lazyloadflag="1"><img alt="" src="http://static.test.pajkdc.com/v1/tfs/T1jRKTB4_T1R4cSCrK.png" data-src="http://static.test.pajkdc.com/v1/tfs/T1jRKTB4_T1R4cSCrK.png" style="width: 100%;" class="img-lazyload" data-lazyloadflag="1"><img alt="" src="http://static.test.pajkdc.com/v1/tfs/T1jyKTBXWT1R4cSCrK.png" data-src="http://static.test.pajkdc.com/v1/tfs/T1jyKTBXWT1R4cSCrK.png" style="width: 100%;" class="img-lazyload" data-lazyloadflag="1"></strong></p>

<div id="oHealth"><input onclick="window.location.href = 'http://phyex.test.pajk.cn/#/mall/select?packageCode=2001&amp;packageName=%E5%81%A5%E5%BA%B7%E4%BD%93%E6%A3%80%20%E5%9F%BA%E7%A1%80%E5%A5%97%E9%A4%90'" type="button" value="查看体检机构项目详情"></div>
<script>
function showButtons(){
var buttonIds = ['oHealth'];
if(window.hasOwnProperty('Globals') && window.Globals && window.Globals.hasOwnProperty('MALLH5') && window.Globals.MALLH5){
for(var i=0;i<buttonIds.length;i++){
document.getElementById(buttonIds[i]).style.display='block';
}
}
}
showButtons();
</script>

<p>&nbsp;</p>

<p><strong>体检服务城市：</strong><br>
A~H北京、重庆、常熟、常州、长春、长沙、成都、大连、东莞、东营、鄂尔多斯、佛山、福州、广州、贵阳、哈尔滨、哈密、海口、杭州 、合肥、呼和浩特、惠州<br>
J~M 吉林、济南、济源、江阴、金华、锦州、晋城、库尔勒、昆明、昆山、兰州、辽阳、临沂<br>
N~S 洛阳、吕梁、绵阳、南昌、南京、南宁、南通、南阳、宁波、濮阳、青岛、泉州、上海、深圳、沈阳、石家庄、苏州<br>
T~Z 太原、唐山、天津、威海、潍坊、温州、乌鲁木齐、无锡、武汉、西安、西宁、咸阳、新乡、厦门、许昌、烟台、延吉、伊犁、银川、运城、郑州、中山、珠海</p>

<p><img alt="" src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABQAAD/4QMsaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAxNCA3OS4xNTE0ODEsIDIwMTMvMDMvMTMtMTI6MDk6MTUgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFMjkxNEUzRDFGMkUxMUU2OEU1N0Q5RkU0RjJFOUNBMiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFMjkxNEUzRTFGMkUxMUU2OEU1N0Q5RkU0RjJFOUNBMiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkUyOTE0RTNCMUYyRTExRTY4RTU3RDlGRTRGMkU5Q0EyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkUyOTE0RTNDMUYyRTExRTY4RTU3RDlGRTRGMkU5Q0EyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAgICAgICAgICAgMCAgIDBAMC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" data-src="http://static.test.pajkdc.com/v1/tfs/T1jtKTBXAT1R4cSCrK.png" style="width: 100%;"><img alt="" src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABQAAD/4QMsaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAxNCA3OS4xNTE0ODEsIDIwMTMvMDMvMTMtMTI6MDk6MTUgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFMjkxNEUzRDFGMkUxMUU2OEU1N0Q5RkU0RjJFOUNBMiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFMjkxNEUzRTFGMkUxMUU2OEU1N0Q5RkU0RjJFOUNBMiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkUyOTE0RTNCMUYyRTExRTY4RTU3RDlGRTRGMkU5Q0EyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkUyOTE0RTNDMUYyRTExRTY4RTU3RDlGRTRGMkU5Q0EyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAgICAgICAgICAgMCAgIDBAMC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" data-src="http://static.test.pajkdc.com/v1/tfs/T1QaKTB4_T1R4cSCrK.png" style="width: 100%;"></p>
            `
        }
    }

    componentWillMount() {
        const html = this.state.html +
            `
            <div id='health'>
                <input type="button" value='我是一个富文本按钮' onclick='console.log(123123); window.location.href = "http://www.baidu.com"'/>
                <button id='test-xss'>测试xss</button>
            </div>
            <script>
                document.getElementById('test-xss').onclick = function() {
                    alert('xss script');
                }
            </script>
        `
        this.setState({ html })
    }

    handleClick(e) {
        const node = e.target;
        const {open} = this.props;
        console.log(node.nodeName);
        if (node.nodeName === 'IMG' && !node.closest('a')) {
            open && open(node.src);
        }
        if (node.nodeName === 'A') {
            const href = node.getAttribute('href');
            console.log(href);
            if (href && href.indexOf('http') !== -1) {
                window.location.href = href;
            }
        }

    }
    render() {
        return <div onClick={(e) => this.handleClick(e)} dangerouslySetInnerHTML={{ __html: this.state.html }}>
        </div>
    }
}

export default class extends Component {
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
            <div className='mask' style={{ display: this.state.open ? 'flex' : 'none' }} onClick={() => this.setState({ open: false })}>
                <img id='zoom-img' src="" alt="zoom-img" />
            </div>
        </div>
    }

    open(src) {
        this.setState({ open: true });
        this.src = src;
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.open) {
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