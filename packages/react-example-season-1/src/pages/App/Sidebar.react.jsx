import React, {Component} from 'react';
import {withRouter, Link} from 'react-router';
import articles from 'articles';

class Sidebar extends Component{
    constructor(props) {
        super(props);
        this.handleTextFilterChange = ::this.handleTextFilterChange;
        this.toggleSideBar = ::this.toggleSideBar;
        this.state = {
            filterText: this.props.filterText,
            hideSideBar: this.props.hideSideBar
        }
    }
    render() {
        const sideBarItems = this.renderItems();
        const {hideSideBar, filterText} = this.state;
        return <div className={`sidebar ${hideSideBar ? 'hide' : ''}`}>
            <a id='hide-sidebar' onClick={this.toggleSideBar}>隐藏</a>
            <Link className='toc_title' to='/'>React全家桶<span>(__VERSION__)</span></Link>
            <ul className='toc_section'>
                <li>» <a href="https://github.com/mrdulin/react-examples">GitHub Repository</a></li>
            </ul>
            <input id='article-filter' type="text" placeholder='Filter' value={filterText} onChange={this.handleTextFilterChange}/>
            {sideBarItems}
        </div>
    }

    handleTextFilterChange(e) {
        const value = e.target.value;
        this.setState({filterText: value});
        this.props.handleFilterChangeCallback(value);
    }

    renderItems() {
        const {items} = articles;
        const libNames = Object.keys(items);
        return libNames.map((libName, index) => {
            const articleKeys = Object.keys(items[libName]);
            const articles = articleKeys.map((articleKey, idx) => {
                if(articleKey.indexOf(this.state.filterText) !== -1) {
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

    toggleSideBar(e) {
        const {handleSideBarHideCallback = () => {}} = this.props;
        const hideSideBar = !this.state.hideSideBar;
        this.setState({hideSideBar}, handleSideBarHideCallback.bind(this, hideSideBar));
    }

    handleTitleClick(e, libName) {
        this.props.router.push(`/${libName}`);
    }   
}

export default withRouter(Sidebar);