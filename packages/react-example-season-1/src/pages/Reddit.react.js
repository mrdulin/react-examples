import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class Reddit extends Component{
    render() {
        return (
            <div>This is reddit</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        
    };
}

export default connect(
    mapStateToProps
)(Reddit);
