import React, {Component, PropTypes} from 'react';

class CreateIframe extends Component{
    componentDidMount() {
        this.appendIframe('http://www.baidu.com')
    }

    appendIframe(url) {
        const iframe = document.createElement('iframe');
        iframe.src = url;
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

export default CreateIframe;
