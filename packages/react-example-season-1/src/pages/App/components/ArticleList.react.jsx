import React, {Component} from 'react';
import articles from 'articles';

class ArticleList extends Component {
    static contextTypes = {
        router: React.PropTypes.object
    }
    
    static defaultProps = {
        ...articles
    }
    state = {
        filterText: ''
    }

    componentWillReceiveProps(nextProps) {
        // console.log(nextProps.filterText);
        if(typeof nextProps.filterText !== 'undefined' && this.props.filterText !== nextProps.filterText) {
            this.setState({filterText: nextProps.filterText});
        }
    }
    
    render() {
        const articleList = this.renderArticleList();
        return <div className='article-list-container'>{articleList}</div>
    }
    renderArticleList() {
        this.currentRoute = this.props.location.pathname.replace('/', '');
        const articleDataMap = this.props.items[this.currentRoute];
        const articleItems = Object.keys(articleDataMap).map((articleKey, index) => {
            if(articleKey.indexOf(this.state.filterText) !== -1) {
                return <li key={articleKey}>
                    <a href="javascript:void(0)" onClick={e => this.handleArticleClick(e, articleKey)}>
                        <span>{articleKey}</span> - <span>{articleDataMap[articleKey]}</span>
                    </a>
                </li>
            }
        })
        return <ul className='article-list'>{articleItems}</ul> 
    }

    handleArticleClick(e, articleKey) {
        this.context.router.push(`/${this.currentRoute}/${articleKey}`);
    }
}

export default ArticleList;