import React, {Component} from 'react';
import {connect} from 'react-redux';

class Main extends Component{
    state = {
        filterText: ''
    }
    componentWillReceiveProps(nextProps) {
        // console.log(nextProps.filterText);
        if(this.props.filterText !== nextProps.filterText) {
            this.setState({filterText: nextProps.filterText});
        }
    }
    render() {
        console.count('Main render');
        const {loading} = this.props;
        const children = React.Children.map(this.props.children, (child, index) => {
            return React.cloneElement(child, {filterText: this.state.filterText}); 
        });
        return <div className='main'>
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