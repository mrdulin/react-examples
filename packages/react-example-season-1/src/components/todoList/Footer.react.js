import React, {Component} from 'react';

class Footer extends Component{
    renderFilter(filter, name) {
        if(filter = this.props.filter) {
            return name;
        }

        return (
            <a>
                //TODO 
            </a>
        );
    }
    render() {
        return (
            <div>
                show:
                {' '}
                this.renderFilter('SHOW_ALL', 'all'),
                {', '}
                this.renderFilter('SHOW_COMPLETE', 'completed');
                {', '}
                this.renderFilter('SHOW_ACTIVE', 'active');
            </div>
        );
    }
}

export default Footer;
