import React, {Component} from 'react';

class DownloadAll extends Component{
    render() {
        const childrenWithProps = React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, {
                onClick: this.downloadAll.bind(this, this.props.links)
            });
        });

        return <div>{childrenWithProps}</div>
    }

    downloadAll(links) {
        console.log(links);
        const linkDom = document.createElement('a');
        linkDom.setAttribute('download', null);
        linkDom.style.display = 'none';
        const {length: len} = links;
        document.body.appendChild(linkDom);
        for(let i = 0; i < len; i++) {
            linkDom.setAttribute('href', links[i]);
            linkDom.click();
        }
        document.body.removeChild(linkDom);
    }
}

export default DownloadAll;
