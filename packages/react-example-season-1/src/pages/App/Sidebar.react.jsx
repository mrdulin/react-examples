import React, {Component} from 'react';
import {withRouter, Link} from 'react-router';
import articles from 'articles';

class Sidebar extends Component{
    constructor(props) {
        super(props);
        this.handleTextFilterChange = ::this.handleTextFilterChange;
        this.state = {
            dataCommunicateBetweenSidebarAndMain: this.props.data
        }
    }
    render() {
        const sideBarItems = this.renderItems();
        return <div className='sidebar'>
            <Link className='toc_title' to='/'>React全家桶<span>(1.0)</span></Link>
            <input id='article-filter' type="text" placeholder='Filter' value={this.state.dataCommunicateBetweenSidebarAndMain.filterText} onChange={this.handleTextFilterChange}/>
            {sideBarItems}
        </div>
    }

    handleTextFilterChange(e) {
        this.setState({
            dataCommunicateBetweenSidebarAndMain: {
                filterText: e.target.value
            } 
        });
    }

    renderItems() {
        const {items} = articles;
        const libNames = Object.keys(items);
        return libNames.map((libName, index) => {
            const articleKeys = Object.keys(items[libName]);
            const articles = articleKeys.map((articleKey, idx) => {
                if(articleKey.indexOf(this.state.dataCommunicateBetweenSidebarAndMain.filterText) !== -1) {
                    return <li key={articleKey}>
                        - <Link to={`/${libName}/${articleKey}`}>{articleKey}</Link>
                    </li>
                }
            })
            return <div key={libName} className='searchable_section'>
                <a className="toc_title" href='javascript:void(0)' onClick={e => this.handleTitleClick(e, libName)}>{libName}</a>
                <ul className='toc_section'>{articles}</ul>
            </div>
        })
    }

    handleTitleClick(e, libName) {
        this.props.router.push(`/${libName}`);
    }   
}

export default withRouter(Sidebar);