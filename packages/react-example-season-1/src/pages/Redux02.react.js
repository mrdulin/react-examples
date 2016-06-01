import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchData, openPolling} from '../actions/redux02';

class Redux02 extends Component{

    static propTypes = {
        user: PropTypes.shape({
            name: PropTypes.string,
            age: PropTypes.number,
            job: PropTypes.string
        }).isRequired
    }

    componentDidMount() {
        this.props.dispatch(fetchData());
        
    }

    componentWillReceiveProps(nextProps) {
        console.log('nextProps', nextProps);
    }

    render() {
        const {dispatch, user, polling} = this.props;
        console.log('user', user);
        return (
            <div>
                <h2>异步action测试</h2>
                <p>name: {user.name}</p>
                <p>age: {user.age}</p>
                <p>job: {user.job}</p>
                <form>
                    <label>
                        <input type="checkbox" onChange={(e) => {this.pollingChange(e)}}></input>
                        开启轮询
                    </label>
                </form>
            </div>
        );
    }

    pollingChange() {

    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        isPolling: state.polling
    };
};

export default connect(
    mapStateToProps
)(Redux02);
