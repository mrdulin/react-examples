import React, {Component} from 'react';

class IframePage extends Component{
    componentDidMount() {
        this.appendIframe()
    }

    appendIframe() {
        const iframe = document.createElement('iframe');
        iframe.src = 'http://www.baidu.com';
        iframe.addEventListener('load', this.handleIframeLoad.bind(this, iframe));
        document.body.appendChild(iframe);
    }

    handleIframeLoad(iframe) {
        this.timeoutid = setTimeout(() => {
            iframe.removeEventListener('load', this.handleIframeLoad);
            document.body.removeChild(iframe);
        });
    }
    render() {
        return <div>append a iframe</div>
    }
}

export default IframePage;
