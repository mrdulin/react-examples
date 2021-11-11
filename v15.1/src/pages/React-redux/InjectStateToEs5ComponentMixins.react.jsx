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
        return <div>
            <h2>Welcome! {InjectStateToEs5ComponentMixins.user.name}</h2>
            <p>react-redux通过connect HOC，注入store，在mixins方法中同样可以拿到this.props，及this.props上得方法和属性。</p>
            <p>需要注意的是：mixins方法必须要用<code>function</code>写法，不能用ES6的箭头函数(this.props报错)，因为this指针会不同。而且，由于要使用mixins，ES6的class写法的组件不支持，只能用<code>React.createClass</code>写法。</p>
        </div>
    }
})

var mapStateToProps = state => ({
    InjectStateToEs5ComponentMixins: state.InjectStateToEs5ComponentMixins
})
export default connect(mapStateToProps)(InjectStateToEs5ComponentMixins);
