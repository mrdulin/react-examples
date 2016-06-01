import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchData} from '../actions/redux02';

class Redux02 extends Component{
    componentDidMount() {
        this.props.dispatch(fetchData());
    }
    render() {
        const {dispatch, user} = this.props;
        console.log('user', user);
        return (
            <div>
                <h2>异步action测试</h2>
                <p>name: {user.name}</p>
                <p>age: {user.age}</p>
                <p>job: {user.job}</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
};

export default connect(
    mapStateToProps
)(Redux02);
