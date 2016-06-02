import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchData, togglePolling} from '../actions/redux02';

class Redux02 extends Component{

    static propTypes = {
        user: PropTypes.shape({
            name: PropTypes.string,
            age: PropTypes.number,
            job: PropTypes.string
        }).isRequired
    }

    componentDidMount() {
        this.props.dispatch(fetchData()).then(() => {
            console.log('componentDidMount request done');
        });
    }

    componentWillReceiveProps(nextProps) {
        // console.log('nextProps', nextProps);
        this.timeout && clearTimeout(this.timeout);
        if(nextProps.polling) {
            this.timeout = setTimeout(() => {
                this.props.dispatch(fetchData())
            }, 2000);
        }
    }

    render() {
        const {dispatch, user, polling} = this.props;
        // console.log('user', user);
        return (
            <div>
                <h2>异步action测试</h2>
                <p>name: {user.name}</p>
                <p>age: {user.age}</p>
                <p>job: {user.job}</p>
                <form>
                    <label>
                        <input checked={polling} type="checkbox" onChange={(e) => {this.pollingChange(e)}}></input>
                        开启轮询
                    </label>
                </form>
            </div>
        );
    }

    pollingChange(e) {
        var isChecked = e.target.checked;
        // console.log('isChecked', isChecked);
        this.props.dispatch(togglePolling(isChecked));
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        polling: state.polling
    };
};

export default connect(
    mapStateToProps
)(Redux02);
