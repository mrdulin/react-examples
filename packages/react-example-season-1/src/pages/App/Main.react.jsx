import React, {Component} from 'react';
import {connect} from 'react-redux';

class Main extends Component{
    state = {
        filterText: '',
        hideSideBar: false
    }
    componentWillReceiveProps(nextProps) {
        // console.log(nextProps.filterText);
        if(this.props.filterText !== nextProps.filterText) {
            this.setState({filterText: nextProps.filterText});
        }

        if(this.props.hideSideBar !== nextProps.hideSideBar) {
            this.setState({hideSideBar: nextProps.hideSideBar});
        }
    }
    render() {
        console.count('Main render');
        const {loading} = this.props;
        const {filterText, hideSideBar} = this.state;
        const children = React.Children.map(this.props.children, (child, index) => {
            return React.cloneElement(child, {filterText: filterText}); 
        });
        return <div className={`main ${hideSideBar ? 'sidebar-hide': ''}`}>
            {children}
            <div className='loading' style={{display: loading ? 'flex' : 'none'}}>
                <div className='loading-img'></div>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.Common
    }
}

export default connect(mapStateToProps)(Main);