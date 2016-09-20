import React from 'react';
import {connect} from 'react-redux';
import userHelper from '../../mixins/userHelper';
import * as Action from '../../actions/InjectStateToEs5ComponentMixins.action';

var InjectStateToEs5ComponentMixins = React.createClass({
    mixins: [userHelper],

    render() {
        return <div>
            {this.isLogin() ? this.renderHome() : this.renderForm()}
        </div>
    },

    renderForm() {
        return <form onSubmit={this.handleLogin}>
            <div>
                <label>
                    username：<input name='username' type="text"/>
                </label>
            </div>
            <div>
                <label>
                    password：<input name='password' type="text"/>
                </label>
            </div>
            <button type='submit'>login</button>
        </form>
    },

    handleLogin(e) {
        e.preventDefault();
        const {dispatch} = this.props;
        const form = e.target;
        const username = form.username.value.trim();
        const password = form.password.value.trim();
        dispatch(Action.login({username, password}));
    },

    renderHome() {
        const {InjectStateToEs5ComponentMixins} = this.props;
        return <h2>Welcome! {InjectStateToEs5ComponentMixins.user.name}</h2>
    }
})

var mapStateToProps = state => ({
    InjectStateToEs5ComponentMixins: state.InjectStateToEs5ComponentMixins
})
export default connect(mapStateToProps)(InjectStateToEs5ComponentMixins);
