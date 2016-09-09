import React, {Component, PropTypes} from 'react';

class Footer extends Component{

    static defaultProps = {
        actionfilterMap: new Map([
            ['SHOW_ALL', 'All'],
            ['SHOW_ACTIVE', 'Active'],
            ['SHOW_COMPLETE', 'Completed']
        ])
    }

    render() {
        const {actionfilterMap, currentFilter, todoCount} = this.props;
        const filterItems = [...actionfilterMap.keys()].map(actionType => {
            const filterName = actionfilterMap.get(actionType);
            return <li key={filterName}>
                <a href="" className={`${filterName === currentFilter ? 'selected' : ''}`} onClick={() => this.handleFilterClick(actionType, filterName)}>{filterName}</a>
            </li>
        });
        return (
            <footer id='footer' style={{display: todoCount > 0 ? 'display' : 'none'}}>
                <span id='todo-count'></span>
                <ul id='filters'>{filterItems}</ul>
            </footer>
        );
    }

    handleFilterClick() {

    }
}

Footer.PropTypes = {
    filter: PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETE',
        'SHOW_ACTIVE'
    ]).isRequired,

    onFilterChange: PropTypes.func.isRequired
};

export default Footer;
