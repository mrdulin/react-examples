import React, {Component, PropTypes} from 'react';

class Footer extends Component{
    renderFilter(filter, name) {
        if(filter === this.props.filter) {
            return name;
        }

        return (
            <a href='#' onClick={(e) => {
                    e.preventDefault();
                    this.props.onFilterChange(filter);
                }}>
                {name}
            </a>
        );
    }
    render() {
        return (
            <div>
                show:
                {' '}
                {this.renderFilter('SHOW_ALL', 'all')}
                {', '}
                {this.renderFilter('SHOW_COMPLETE', 'completed')}
                {', '}
                {this.renderFilter('SHOW_ACTIVE', 'active')}
            </div>
        );
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
